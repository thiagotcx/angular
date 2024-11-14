import { ErrorTypeEnum } from "../enums/error-type-enum"
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "./password"

type ErrorMessage = {
    [key in ErrorTypeEnum]?: string;
}

export const EMAIL_ERROR_MESSAGES: ErrorMessage = {
    [ErrorTypeEnum.REQUIRED]: 'E-mail é um campo obrigatório.',
    [ErrorTypeEnum.EMAIL]: 'Você precisa informar um e-mail válido.',
}

export const PASSWORD_ERROR_MESSAGES: ErrorMessage = {
    [ErrorTypeEnum.REQUIRED]: 'Senha é um campo obrigatório.',
    [ErrorTypeEnum.MIN_LENGTH]:
        `Senha deve conter no mínimo ${MIN_PASSWORD_LENGTH} caracteres.`,
    [ErrorTypeEnum.MAX_LENGTH]:
        `Senha deve conter no máximo ${MAX_PASSWORD_LENGTH} caracteres.`,
}
