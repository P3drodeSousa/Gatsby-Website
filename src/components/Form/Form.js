import React from "react"
import { Formik } from "formik"
import {
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
} from "./style"

const Form = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50vw",
    }}
  >
    <Title>
      Thanks for taking the time to reach out. How can I help you today?
    </Title>
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      //   validate={}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
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
              />
              {errors.name && touched.name && errors.name}
            </Label>
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
              />
              {errors.email && touched.email && errors.email}
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
              />
              {errors.message && touched.message && errors.message}
            </Label>
          </TextAreaContainer>

          <ButtonContainer>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
    </Formik>
  </div>
)

export default Form
