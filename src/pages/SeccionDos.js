import React from 'react';
import '../css/SeccionDos.css';

const SeccionDos = () => {
  return (
    <div className="container-page mt-5">
      <h1>Protección de Datos y Confidencialidad en el Entorno Digital</h1>
      <p>
        En la era digital actual, los datos constituyen uno de los activos más valiosos para las organizaciones. Garantizar la confidencialidad y protección de la información es una prioridad esencial. Tanto las normativas legales como las técnicas criptográficas desempeñan un rol crucial en la salvaguarda de los datos sensibles frente a amenazas cada vez más sofisticadas.
      </p>

      <h2>Regulaciones Claves para la Protección de Datos</h2>

      <h3>Ley General de Protección de Datos Personales (México)</h3>
      <p>
        La <strong>Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados</strong>, promulgada en 2017 en México, establece los principios rectores para el tratamiento adecuado y seguro de la información personal en posesión de entidades públicas. Su propósito es salvaguardar los derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) de los ciudadanos, promoviendo la transparencia y el uso responsable de los datos.
      </p>

      <h3>Ley Federal de Protección de Datos Personales en Posesión de Particulares</h3>
      <p>
        Promulgada en 2010, esta ley establece un marco normativo para la protección de los datos personales en el sector privado, obligando a las organizaciones a respetar los derechos de los titulares y a implementar mecanismos para garantizar la seguridad de la información.
      </p>

      <h2>Legislación en Propiedad Intelectual</h2>

      <h3>Ley de Propiedad Industrial</h3>
      <p>
        La <strong>Ley de Propiedad Industrial</strong> protege las invenciones, marcas comerciales y diseños industriales, otorgando derechos exclusivos sobre su explotación. Esta legislación fomenta la innovación y proporciona sanciones en caso de violaciones a los derechos de propiedad intelectual, asegurando la justa protección a los creadores.
      </p>

      <h3>Ley Federal de Derechos de Autor</h3>
      <p>
        Esta ley reconoce y protege los derechos morales y patrimoniales de los creadores sobre sus obras. Abarca el control de la reproducción, distribución y comercialización de creaciones literarias, artísticas, científicas y digitales. México, al ser firmante del Convenio de Berna, extiende esta protección a nivel internacional.
      </p>

      <h3>Protección de Datos en el Ámbito Privado</h3>
      <p>
        La <strong>Ley Federal de Protección de Datos Personales en Posesión de Particulares</strong> regula el tratamiento de la información personal por parte de empresas, permitiendo a los ciudadanos ejercer control sobre sus datos y asegurando que se respeten sus derechos de privacidad.
      </p>

      <h3>Código Penal Federal</h3>
      <p>
        El <strong>Código Penal Federal</strong> tipifica delitos relacionados con el manejo inapropiado de la información, incluyendo el acceso no autorizado a sistemas, el robo de datos y los cibercrímenes. Este marco establece sanciones claras para quienes vulneren la seguridad de la información.
      </p>

      <h3>Ley General de Transparencia y Acceso a la Información</h3>
      <p>
        Esta ley garantiza el derecho de los ciudadanos a acceder a la información generada por las entidades públicas. También establece controles para proteger los datos personales y evitar su uso indebido, asegurando una gestión transparente de la información.
      </p>

      <h2>Técnicas Criptográficas para la Seguridad de la Información</h2>

      <h3>Cifrado Simétrico</h3>
      <p>
        El <strong>cifrado simétrico</strong> emplea una única clave para cifrar y descifrar la información, ofreciendo alta eficiencia en el manejo de grandes volúmenes de datos. No obstante, plantea retos en cuanto a la distribución segura de dicha clave. Algoritmos como <strong>AES</strong> y <strong>DES</strong> son ejemplos de este tipo de cifrado.
      </p>

      <h3>Cifrado Asimétrico</h3>
      <p>
        A diferencia del cifrado simétrico, el <strong>cifrado asimétrico</strong> utiliza un par de claves: una pública para encriptar la información y otra privada para descifrarla. Este método facilita la distribución segura de las claves, siendo algoritmos como <strong>RSA</strong> y <strong>ECC</strong> los más utilizados.
      </p>

      <h3>Cifrado por Bloques y Cifrado por Flujo</h3>
      <p>
        El <strong>cifrado por bloques</strong> divide los datos en bloques de tamaño fijo, mientras que el <strong>cifrado por flujo</strong> cifra la información bit a bit. Ambos métodos ofrecen ventajas en diferentes escenarios: el cifrado por bloques es ideal para almacenamiento de datos, mientras que el cifrado por flujo es más adecuado para transmisiones en tiempo real.
      </p>

      <h3>Análisis Criptográfico</h3>
      <p>
        El <strong>criptoanálisis</strong> es el estudio de vulnerabilidades en los sistemas criptográficos. A través de técnicas como ataques de fuerza bruta y análisis de frecuencias, se busca identificar debilidades y fortalecer la seguridad de los algoritmos de cifrado.
      </p>

      <h3>Múltiples Capas de Protección</h3>
      <p>
        La integración de técnicas criptográficas, tanto simétricas como asimétricas, y otros métodos de seguridad proporciona una protección robusta para los datos. La adopción de varias capas de seguridad permite mitigar de manera efectiva los riesgos asociados a ataques cibernéticos.
      </p>

      <h2>Cumplimiento de Normativas</h2>
      <p>
        El cumplimiento de normativas como la Ley de Protección de Datos Personales y la Ley de Propiedad Industrial es esencial para garantizar tanto la privacidad de los individuos como la protección de los derechos intelectuales en el ámbito digital.
      </p>

      <h2>Conclusión</h2>
      <p>
        La protección de la información es indispensable en el contexto digital. A través del cumplimiento de regulaciones, la implementación de medidas criptográficas y la adopción de buenas prácticas, las organizaciones pueden garantizar la seguridad de sus datos y mitigar las amenazas cibernéticas.
      </p>

      <footer>
        <p>&copy; 2024 Protección de Datos</p>
        <p>&copy; 2024 Herrera Sanchez Angel Axel</p>
      </footer>
    </div>
  );
};

export default SeccionDos;
