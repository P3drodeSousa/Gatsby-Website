import React from "react"
import { Formik } from "formik"
import { navigate } from "gatsby"
import { validateSchema } from "./validateShema"
import {
  Container,
  FormContainer,
  Label,
  Input,
  Title,
  TextArea,
  Button,
  Nom,
  Email,
  TextAreaContainer,
  ButtonContainer,
  Error,
} from "./style"
import Waiting from "./waiting/index.js"

let SentError = false
let EmailSent = false

const Form = () => (
  <Container>
    <Title>
      Merci d'avoir pris le temps de me contacter. Comment puis-je vous aider ?
    </Title>
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validateSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const ok = await fetch("https://pedroapipedro.herokuapp.com/form", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
        const res = await ok.json()

        SentError = !res.ok
        EmailSent = res.emailSent
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <div>{SentError && <span>Something went wrong </span>}</div>

          {isSubmitting ? (
            <Waiting />
          ) : EmailSent ? (
            <div
              style={{
                display: "flex",
                height: "30rem",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "green" }}>
                Votre Message a été envoyé avec succès.
              </h1>
              <Button onClick={() => navigate("/")}>HomePage</Button>
            </div>
          ) : (
            <FormContainer onSubmit={handleSubmit}>
              <Nom>
                <Label htmlFor="name">
                  Nom
                  <Input
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={errors.name}
                  />
                </Label>
                {errors.name && touched.name && <Error>{errors.name}</Error>}
              </Nom>

              <Email>
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email}
                  />
                  {errors.email && touched.email && (
                    <Error>{errors.email}</Error>
                  )}
                </Label>
              </Email>

              <TextAreaContainer>
                <Label htmlFor="message">
                  Message
                  <TextArea
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    error={errors.message}
                  />
                  {errors.message && touched.message && (
                    <Error>{errors.message}</Error>
                  )}
                </Label>
              </TextAreaContainer>
              <ButtonContainer>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </ButtonContainer>
            </FormContainer>
          )}
        </>
      )}
    </Formik>
  </Container>
)

export default Form
