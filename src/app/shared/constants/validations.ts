import { Validators } from "@angular/forms";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "./password";

export const EMAIL_VALIDATIONS = [
    Validators.required,
    Validators.email,
]

export const PASSWORD_VALIDATIONS = [
    Validators.required,
    Validators.minLength(MIN_PASSWORD_LENGTH),
    Validators.maxLength(MAX_PASSWORD_LENGTH)
]
