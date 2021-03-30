import { Language } from 'locale'
import { ParsedUrlQuery } from 'querystring'

export interface LocalizedPathParams extends ParsedUrlQuery {
	language: Language
}
