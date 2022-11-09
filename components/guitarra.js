import Image from 'next/future/image';
import Link from 'next/link';
import { formatearDinero } from '../helpers';
import styles from '../styles/guitarras.module.css';

export default function Guitarra({ guitarra }) {
    const { descripcion, imagen, nombre, precio, url } = guitarra;

    return (
        <div className={styles.guitarra}>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                alt={`Imagen guitarra ${nombre}`}
                width={600}
                height={400}
            />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{formatearDinero(precio)}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver Guitarra</a>
                </Link>
            </div>
        </div>
    );
}
