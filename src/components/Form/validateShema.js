import * as Yup from "yup"

export const validateSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ce champ est obligatoire")
    .matches(
      "^[0-9a-zA-Zéàëö\b ]+$",
      "Les caractères spéciaux ne sont pas permis"
    )
    .min(2, "Votre Nom doit comporter au minimum 2 caractères ")
    .max(40, "Votre nom ne doit pas depasser les 40 caractères"),

  email: Yup.string()
    .email("Veuillez entrer une adresse e-mail valide")
    .required("Ce champ est obligatoire"),

  message: Yup.string()
    .required("Ce champ est obligatoire")
    .matches(
      "^[0-9a-zA-Zéèü^'~ç@&()äàëö,.!?\b ]+$",
      "Les caractères spéciaux ne sont pas permis"
    )
    .min(10, "The name be at least 10 caracters"),
})
