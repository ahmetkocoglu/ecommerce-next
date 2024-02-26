import { PriceType } from "./priceType"

export type FormProductType = {
    id: number | null
    title: string
    seo: string
    description: string
    stockCode: string
    barcode: string
    associative: string
    tax: string
    salePrice: number
    discountPrice: number
    discountRate: number
}