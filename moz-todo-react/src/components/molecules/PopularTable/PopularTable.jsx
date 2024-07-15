import React from "react";
import H4 from "../../atoms/H4/H4";
import Table from "../../atoms/Table/Table";
import Tr from "../../atoms/Tr/Tr";
import Th from "../../atoms/Th/Th";
import Td from "../../atoms/Td/Td";

const PopularTable = () => {
  return (
    <>
      <H4 contenido="Peliculas Más Populares" />
      <Table id="customers">
          <Tr>
            <Th contenido="Peliculas Nominadas" />
            <Th>Reseña Del Público</Th>
            <Th>Calificación del público</Th>
          </Tr>
          <Tr>
            <Td children="Sherk 2" />
            <Td>
              Tras los acontecimientos de la película anterior, ahora se explora
              lo que viene después del tan cliché “felices para siempre”.
              Shrek ahora tiene que lidiar con su suegro y eso hace que incluso
              se cuestione si realmente se merece el amor de Fiona. La película
              muestra la otra cara del mundo de los cuentos de hadas, enfocándose
              a algo mucho más realista que es enfrentar a los padres de aquel
              que amas y demostrar si eres digno.
            </Td>
            <Td>4.9</Td>
          </Tr>
          <Tr>
            <Td children="Los Increíbles" />
            <Td>
              LOS INCREÍBLES hace honor al título, es una película increíble,
              muy bien hecha, para un género que hoy en día está saturado
              (cine de superhéroes), una animación que envejeció muy bien,
              secuencias muy bien logradas, personajes memorables, un villano
              bueno, una banda sonora espectacular
            </Td>
            <Td>4.7</Td>
          </Tr>
          <Tr>
            <Td children="John Wick" />
            <Td>
              Sin duda esta película trajo una frescura al cine, con uno de los
              personajes mas icónicos de los últimos años, con una increíble
              trama y unas escenas de acción excepcionales. Con una historia
              que se va construyendo de poco a poco, la película llega a su
              nivel mas alto en su tercer acto. donde tanto como la historia
              y las escenas de acción llegan a un nivel increíble, con unas
              coreografías muy bien logradas, que se ven naturales.
            </Td>
            <Td>4.7</Td>
          </Tr>
          <Tr>
            <Td children="Spiderman No Way Home" />
            <Td>
              "UNA PURA MARAVILLA" Realmente una pasada total, ha sido alucinante,
              ya no se hacen películas de superhéroes como esta. Todos sabíamos
              que el final de Far From Home (2019) era solo el principio del
              comienzo. Cuando Mysterio (Jake Gyllenhal) revela la identidad
              de Peter Parker (Tom Holland) al mundo entero, arruinando su
              reputación y su vida, ahora todos saben lo que siente un famoso
              acompañado de una polémica.
            </Td>
            <Td>4.7</Td>
          </Tr>
          <Tr>
            <Td children="Rápidos y Furiosos 9" />
            <Td>
              He visto todas las películas de la saga, y lo que empezó siendo
              una historia sobre chicos con coches tuneados que robaban material
              electrónico ha acabado siendo una especie de peli sobre superagentes
              que hacen cosas imposibles con sus coches. Aún así, me siguen
              entreteniendo y decidí ir a ver esta nueva entrega.
            </Td>
            <Td>3.0</Td>
          </Tr>
      </Table>
      </>
  );
}

export default PopularTable;
