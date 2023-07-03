
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Applicant",
    nodeCode: "applicant"
})
export class GspUserA50fEntity extends Entity {

    @NgField({
        originalDataField: 'Applicant',
        dataField: 'applicant',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Applicant.Applicant',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    applicant: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'applicant_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Applicant.Applicant_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    applicant_ID: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'applicant_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Applicant.Applicant_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    applicant_Name: string;

}