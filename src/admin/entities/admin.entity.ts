import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttr {
    username: string;
    email: string;
    hashed_password: string;
    hashed_refresh_token: string;
    phone_number: string;
    admin_photo: string;
}

@Table({ tableName: 'admin' })
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
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone_number: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    admin_photo: string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_creater: boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: true
    })
    is_active: boolean;
}
