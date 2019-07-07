import {MigrationInterface, QueryRunner} from "typeorm";

export class addVotesColumnToOptionTable1562474453327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "option" ADD "votes" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "option" DROP COLUMN "votes"`);
    }

}
