import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1634874685704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"username",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"nome_completo",
                        type:"varchar"
                    },
                    {
                        name:"idade",
                        type:"integer"
                    },
                    {
                        name:"endereco",
                        type:"varchar"
                    },
                ]
            })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("users")
    }

}
