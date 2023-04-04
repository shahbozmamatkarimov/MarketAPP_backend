import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { District } from "../../district/entities/district.entity";
import { Region } from "../../region/entities/region.entity";
import { Country } from "../../country/entities/country.entity";

interface LocationAttr {
    street: string;
    district_id: number;
    region_id: number;
    country_id: number;
}

@Table({ tableName: 'Location' })
export class Location extends Model<Location, LocationAttr> {
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
    street: string;


    @ForeignKey(() => District)
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    district_id: number;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    region_id: number;

    @ForeignKey(() => Country)
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    country_id: number;
}
