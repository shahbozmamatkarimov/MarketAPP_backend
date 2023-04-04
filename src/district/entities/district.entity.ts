import { Column, DataType, Model, Table } from "sequelize-typescript";

interface DistrictAttr{
    district: string;
}

@Table({tableName: 'district'})
export class District extends Model<District, DistrictAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    district: string;
}
