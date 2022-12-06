import { IsNotEmpty } from "class-validator";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_produto'})
export class Produto {

  @PrimaryGeneratedColumn()
  public id: number

  @IsNotEmpty()
  @Column({length: 100, nullable: false})
   public nome: string

  @IsNotEmpty()
  @Column({length: 300, nullable: false})
  public descricao: string

  @IsNotEmpty()
  @Column({type: "decimal", precision: 5, scale: 2, default: 0})
  public preco: number

  @IsNotEmpty()
  @Column({length: 255, nullable: false})
  public foto: string

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {onDelete: "CASCADE"})
  categoria: Categoria

  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {onDelete: "CASCADE"})
  usuario: Usuario  
}
