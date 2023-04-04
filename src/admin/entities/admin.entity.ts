import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttr{
    name: string;
    login: string;
    hashed_password: string;
    hashed_refresh_token: string;
}

@Table({tableName: 'admin'})
export class Admin extends Model<Admin, AdminAttr> {
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
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone_number: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    is_active: boolean;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;
}
