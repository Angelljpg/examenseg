import React from 'react';
import '../css/DetalleSeguridad.css';

const DetalleSeguridad = () => {
  return (
    <div className="container-page mt-5">
      <h1>Introducción a la Protección de la Información Digital</h1>
      <p>
        La protección de la información digital implica una serie de procedimientos y estrategias diseñadas para resguardar la confidencialidad, la precisión y la accesibilidad de los datos. Con el creciente uso de tecnologías en todos los sectores, garantizar la seguridad de la información es crucial tanto para individuos como para organizaciones.
      </p>
      
      <h2>Principios Clave de la Protección de Datos</h2>
      <h3>Confidencialidad:</h3>
      <p>Garantiza que los datos solo sean accesibles para aquellos con los permisos adecuados. Esto se consigue implementando mecanismos como políticas de acceso, encriptación y procedimientos de seguridad.</p>
      <p><strong>Ejemplos:</strong> cifrado de información sensible, verificación en dos pasos.</p>

      <h3>Precisión de Datos (Integridad):</h3>
      <p>Asegura que la información se mantenga sin alteraciones no autorizadas durante su almacenamiento y transmisión. Herramientas como firmas digitales y códigos de validación ayudan a preservar la integridad.</p>
      <p><strong>Ejemplos:</strong> uso de algoritmos de hash para comprobar la integridad de archivos y bases de datos.</p>

      <h3>Accesibilidad:</h3>
      <p>Asegura que los sistemas y datos estén disponibles cuando se necesiten. Esto incluye planes para la recuperación de datos y la implementación de infraestructuras redundantes para evitar interrupciones.</p>
      <p><strong>Ejemplos:</strong> replicación de servidores y copias de seguridad frecuentes.</p>

      <h3>Verificación de Identidad (Autenticación):</h3>
      <p>Este proceso permite confirmar la identidad de los usuarios antes de concederles acceso a sistemas o información. Puede incluir contraseñas, tokens y sistemas biométricos.</p>
      <p><strong>Ejemplos:</strong> uso de contraseñas robustas y autenticación en dos factores.</p>

      <h3>Gestión de Permisos (Control de Acceso):</h3>
      <p>Regula quién puede ver o modificar la información y bajo qué condiciones. Los sistemas de control de acceso pueden ser configurados por roles o mediante listas de control específicas.</p>
      <p><strong>Ejemplos:</strong> permisos específicos para usuarios en plataformas de gestión de datos.</p>

      <h2>Riesgos y Amenazas Frecuentes en Seguridad Digital</h2>
      <h3>Programas Maliciosos (Malware):</h3>
      <p>Aplicaciones como virus y ransomware que pueden corromper sistemas o robar información.</p>

      <h3>Suplantación de Identidad (Phishing):</h3>
      <p>Estrategias que engañan a los usuarios para que revelen información personal mediante correos o sitios web fraudulentos.</p>

      <h3>Ataques de Denegación de Servicio (DDoS):</h3>
      <p>Ataques que colapsan servidores al sobrecargarlos de solicitudes, volviéndolos inaccesibles para usuarios legítimos.</p>

      <h3>Manipulación Psicológica (Ingeniería Social):</h3>
      <p>Trucos que explotan la confianza de las personas para robar datos, sin necesidad de técnicas tecnológicas complejas.</p>

      <h3>Filtraciones de Información:</h3>
      <p>Acceso no autorizado a datos confidenciales que pueden resultar en consecuencias legales y daños a la reputación de una entidad.</p>

      <h2>Estrategias de Mitigación y Defensa</h2>
      <h3>Encriptación de Datos:</h3>
      <p>Técnicas que convierten los datos en un formato ilegible sin la clave correspondiente. Se utilizan tanto métodos simétricos como asimétricos.</p>

      <h3>Filtros de Seguridad (Firewalls):</h3>
      <p>Dispositivos o programas que supervisan el tráfico de la red para evitar accesos no permitidos.</p>

      <h3>Herramientas Anti-Malware:</h3>
      <p>Programas que identifican y eliminan software malicioso antes de que este pueda causar daño.</p>

      <h3>Parcheo de Vulnerabilidades:</h3>
      <p>Mantener el software actualizado es clave para evitar la explotación de debilidades conocidas.</p>

      <h3>Formación en Seguridad:</h3>
      <p>Capacitar a los empleados en la detección de amenazas y en las mejores prácticas de seguridad ayuda a prevenir incidentes como ataques de phishing.</p>

      <h2>Cumplimiento de Normas y Legislación</h2>
      <p>Las organizaciones deben acatar diversas normativas como el GDPR en Europa y la Ley de Protección de Datos en México, que regulan el tratamiento adecuado de la información personal.</p>

      <h2>Reflexión Final</h2>
      <p>Proteger la información es un imperativo en la era actual, donde la cantidad de datos generados y almacenados sigue aumentando. Adoptar las mejores prácticas y fomentar una cultura de seguridad es fundamental para mitigar los riesgos y proteger la información crítica.</p>
      <p>Estas medidas no solo previenen ataques, sino que también preparan a las organizaciones para responder de manera eficaz ante incidentes de seguridad.</p>
      <footer>
        <p>&copy; 2024 Protección de la Información </p>
        <p>&copy; 2024 Herrera Sanchez Angel Axel </p>
      </footer>
    </div>
  );
};

export default DetalleSeguridad;
