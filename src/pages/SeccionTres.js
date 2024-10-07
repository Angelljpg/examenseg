import React from "react";
import '../css/SeccionTres.css';  // Aquí puedes mantener o unificar estilos si es necesario

const SeccionTres = () => {
  return (
    <div className="container-page mt-5">
      <h1 className="titulo-principal">Principios de Seguridad de la Información</h1>
      <p>
      La <strong>seguridad de la información</strong> es un conjunto integral de prácticas destinadas a proteger la confidencialidad, integridad, y disponibilidad de los datos, garantizando que solo sean accesibles y manipulados por personas o sistemas autorizados. Estos principios son fundamentales en la era digital actual, donde los datos representan un activo valioso tanto para las organizaciones como para los individuos. 
      </p>
      
      <h2>Accesibilidad</h2>
      <p>
      La <strong>accesibilidad</strong> en el contexto de la seguridad de la información asegura que los datos y sistemas estén disponibles para los usuarios autorizados cuando lo necesiten. Este principio es vital para la continuidad del negocio, ya que cualquier interrupción en el acceso a la información puede afectar gravemente las operaciones. Las organizaciones aplican medidas como redes redundantes, sistemas de respaldo en tiempo real y recuperación ante desastres para garantizar la disponibilidad continua, incluso en escenarios de crisis como ciberataques o fallos tecnológicos.
      <br/>
      <strong>Ejemplos:</strong> El uso de servicios en la nube, como AWS o Google Cloud, que ofrecen alta disponibilidad y recuperación automática en caso de fallos, es un buen ejemplo de cómo las empresas garantizan que la información esté siempre accesible.
      </p>

      <h2>Confidencialidad</h2>
      <p>
      La <strong>confidencialidad</strong> se refiere a la protección de la información frente a accesos no autorizados, asegurando que solo las personas o sistemas aprobados puedan acceder a los datos. Este principio es crucial en sectores como el financiero y el de salud, donde los datos sensibles deben ser protegidos rigurosamente. Para garantizar la confidencialidad, se implementan técnicas como el <strong>cifrado</strong> de extremo a extremo, la <strong>autenticación multifactor</strong> (MFA) y <strong>políticas de acceso basadas en roles</strong>.
      <br/>   
      <strong>Ejemplo práctico:</strong> Los bancos en línea cifran todas las transacciones de los usuarios con el protocolo TLS para garantizar que ningún intruso pueda interceptar información sensible como números de tarjetas de crédito o contraseñas.
      </p>

      <h2>Disponibilidad</h2>
      <p>
      La <strong>disponibilidad</strong> implica que los sistemas, datos y aplicaciones estén accesibles sin interrupciones cuando sean necesarios para los procesos operativos. Para mantener este principio, las organizaciones deben implementar soluciones que prevengan interrupciones, como la protección contra ataques DDoS, fallos de hardware o caídas de servidores.
      <br/>
      <strong>Ejemplo:</strong> Empresas como Netflix dependen de la arquitectura basada en la nube para garantizar un tiempo de actividad continuo. Usan un enfoque de infraestructura distribuida que les permite mantener los servicios en línea, incluso cuando experimentan fallos en una parte de su red.
      </p>

      <h2>Autenticación</h2>
      <p>
      La <strong>autenticación</strong> es el proceso de verificar la identidad de un usuario o sistema antes de permitirle acceder a información o servicios. Los métodos de autenticación van desde contraseñas y tokens de seguridad, hasta datos biométricos como huellas digitales o reconocimiento facial. Un sistema de autenticación sólido previene accesos no autorizados, mitigando riesgos de fraude o violaciones de datos.
      <br/>
      <strong>Ejemplo:</strong> Plataformas como Google y Facebook permiten la autenticación de dos factores (2FA), donde, además de la contraseña, el usuario debe ingresar un código enviado a su dispositivo móvil para acceder a su cuenta.
      </p>

      <h2>Integridad</h2>
      <p>
      La <strong>integridad</strong> asegura que la información se mantenga exacta, completa y confiable durante todo su ciclo de vida, desde su creación hasta su eliminación. Este principio es clave para evitar modificaciones no autorizadas o corrupción de datos. Las <strong>firmas digitales</strong>, los <strong>algoritmos de hashing</strong> y los <strong>controles de integridad</strong> son herramientas esenciales para preservar la integridad de los datos.
      <br/>
      <strong>Ejemplo:</strong> En las transferencias electrónicas de fondos, se utilizan algoritmos de hash para garantizar que los datos no hayan sido alterados durante la transmisión entre los bancos y sus clientes.
      </p>

      <h2>Control de Acceso</h2>
      <p>
      El <strong>control de acceso</strong> define las políticas y mecanismos que regulan quién puede acceder a qué recursos y bajo qué condiciones. Este principio está intrínsecamente relacionado con la confidencialidad y la integridad, ya que un control de acceso eficiente minimiza el riesgo de accesos indebidos o de alteraciones no autorizadas de los datos. Los modelos más comunes incluyen el <strong>Control de Acceso Basado en Roles (RBAC)</strong> y las <strong>Listas de Control de Acceso (ACL)</strong>.
      <br/>
      <strong>Ejemplo:</strong> En una empresa, los empleados de recursos humanos tendrán acceso a los datos del personal, pero no a los sistemas críticos de TI, mientras que los administradores de sistemas pueden gestionar todos los servidores, aplicaciones y bases de datos.
      </p>

      <h2>Amenazas Emergentes y Desafíos Futuristas</h2>
      <p>
      Con la evolución de la tecnología, surgen nuevas amenazas que ponen a prueba los principios de seguridad de la información. Los ataques basados en <strong>inteligencia artificial</strong> y el <strong>ransomware</strong> avanzado son algunos de los desafíos más críticos que enfrentan las organizaciones. A medida que el mundo digital crece, las técnicas de seguridad también deben adaptarse y evolucionar.
      <br/>
      <strong>Ejemplo:</strong> El ataque de ransomware "WannaCry" en 2017 afectó a más de 200,000 computadoras en todo el mundo, bloqueando el acceso a datos esenciales hasta que se pagara un rescate. Este tipo de ataques ha resaltado la importancia de mantener actualizados los sistemas y reforzar la seguridad proactiva.
      </p>

      <footer>
        <p>&copy; 2024 Seguridad de la Información </p>
        <p>&copy; 2024 Herrera Sanchez Angel Axel </p>
      </footer>
    </div>
  );
};

export default SeccionTres;
