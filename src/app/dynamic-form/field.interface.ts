export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}
export const regConfig = [
{
  label: 'string',
  name: 'string',
  inputType: 'text',
  type: 'input',
  value: ''
}

];
