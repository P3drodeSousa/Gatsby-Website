import React from "react"
import { Formik } from "formik"
import { FormContainer, Label, Input, Title, TextArea, Button } from "./style"

const Form = () => (
  <div>
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

          <Label htmlFor="message">
            Message
            <TextArea
              rows="4"
              cols="55"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}
          </Label>

          <div>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </FormContainer>
      )}
    </Formik>
  </div>
)

export default Form
