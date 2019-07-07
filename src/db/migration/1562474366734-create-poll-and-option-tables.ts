import {MigrationInterface, QueryRunner} from "typeorm";

export class createPollAndOptionTables1562474366734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "poll" ("id" SERIAL NOT NULL, "question" character varying(500) NOT NULL, CONSTRAINT "PK_03b5cf19a7f562b231c3458527e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "option" ("id" SERIAL NOT NULL, "text" character varying(500) NOT NULL, "pollId" integer, CONSTRAINT "PK_e6090c1c6ad8962eea97abdbe63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_d710400e48b60236cd8be3e2502" FOREIGN KEY ("pollId") REFERENCES "poll"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_d710400e48b60236cd8be3e2502"`);
        await queryRunner.query(`DROP TABLE "option"`);
        await queryRunner.query(`DROP TABLE "poll"`);
    }

}
