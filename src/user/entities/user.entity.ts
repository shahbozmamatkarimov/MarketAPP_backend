import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserAttr {
    username: string;
    first_name: string;
    last_name: string;
    passportId: number;
    address: string;
    user_photo: string;
    phone_number: string;
    email: string;
    hashed_password: string;
    hashed_refresh_token: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserAttr> {
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
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    passportId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    user_photo: string;

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
        type: DataType.STRING,
    })
    hashed_refresh_token: string;
}
