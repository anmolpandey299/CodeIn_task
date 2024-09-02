import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"movies"})
export class Movie {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    genre:string;

    @Column()
    year:number;

    @Column("float")
    rating:number;

    @Column("text",{array:true})
    actors:string[];
}
