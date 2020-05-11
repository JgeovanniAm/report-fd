export interface IResponse {
  response: string
  success: boolean
}

export interface Imodal {
  description: string
  title: string
}
export enum EnumType {
  PAGOS="PAGOS",
  SALARIO="SALARIO",
  PRESTAMO="PRESTAMO",
  PERSONAL="PERSONAL",
  BONO="BONO",
  OTRO="OTRO",
  AHORRO="AHORRO"
}

export interface IIncomeBymonth {
  title: string
  CRC: string
  descript: string
  type: EnumType
}

export interface IExpense extends IIncomeBymonth{
  type: EnumType
  date: Date
}
