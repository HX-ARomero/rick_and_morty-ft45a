# **💪 HW7 | Testing - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework construiremos algunos test para validar que nuestro proyecto esté funcionando correctamente.

Te daremos instrucciones solo para construir algunos test del lado de tu Back-End, pero tu puedes crear todos los que gustes.

Finalmente te brindaremos información para que aprendas a testear tu Front-End.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 01 | Dependencias**

Instala las siguientes dependencias en el **`package.json`** de tu servidor:

-  **jest**
-  **supertest**

Además, dentro del **`package.json`** deberás agregar el siguiente script:

```bash
   "test": "jest --detectOpenHandles"
```

<br />

---

### **👩‍💻 EJERCICIO 02 | Modularizar el Server**

1. Dentro de la carpeta **src** debes crear un archivo llamado **`app.js`**.

2. Luego de crealo tendrás que copiar y pegar todo lo que tienes en tu archivo **`index.js`** dentro de este, exceptuando la ejecución de la función **listen**. Esta función debe permanecer en tu archivo **`index.js`**.

3. Dentro de tu archivo **`app.js`** debes exportar tu servidor, y luego importarlo dentro de tu archivo **`index.js`**.

> [**NOTA**]: ten en cuenta que la variable PORT (si es que tienes una) debe permanecer en el archivo **`index`**.

<br />

---

### **👩‍💻 EJERCICIO 03 | Testing Template**

Dirígete a la carpeta **test**. En esta crea un archivo llamado **`index.test.js`**. Aquí desarrollaremos el testing.

1. Dentro del archivo que acabas de crear tendrás que importar los siguientes elementos:

   ```javascript
   const app = require('../src/app');
   const session = require('supertest');
   const agent = session(app);
   ```

2. Crea la primer función **describe** con el mensaje **"_Test de RUTAS_"**.

Recuerda que todos los ejercicios de testing serán asincrónicos, ya que estaremos ejecutando rutas. ¡Puedes utilizar **promesas** o **async await**!

<br />

---

### **👩‍💻 EJERCICIO 04 | GET /rickandmorty/character/:id**

Crea un **describe** con el mensaje '**`GET /rickandmorty/character/:id`**'.

1. **PRIMER TEST**:

   Crea un **it** con el mensaje '**`Responde con status: 200`**'. En su **callback** pega el siguiente código:

   ```javascript
   await agent.get('/rickandmorty/character/1').expect(200);
   ```

2. **SEGUNDO TEST**:

   Crea un **it** con el mensaje '**`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`**'.

   Aquí tendrás que obtener la respuesta de esta ruta. Valida si en la propiedad **body** de la respuesta obtienes todas las propiedades correspondientes.

> [**PISTA**]: podrías validar esto con el métodos [**`toHaveProperty`**](https://jestjs.io/docs/expect#tohavepropertykeypath-value).

3. **TERCER TEST**:

   Crea un **it** con el mensaje '**`Si hay un error responde con status: 500`**'. Aquí tendrás que validar que este será el status si se ingresa un id que no existe para buscar al personaje. Es decir, tendrás que forzar el error.

<br />

---

### **👩‍💻 EJERCICIO 05 | GET /rickandmorty/login**

Crea un nuevo describe con el comentario: **"_GET /rickandmorty/login_"**. En este test tendrás que validar dos cosas:

1. Valida que, si ejecutas esta ruta pasándole la información de login (email y password) correctas, debes obtener un objeto como este:

   ```js
   {
      access: true;
   }
   ```

> [**NOTA**]: recuerda que la información la debes enviar por **`Query`**. Además, recuerda que la información de login se encuentra en tu achivo **`/src/utils/index`**.

2. Ahora tendrás que testear que en el caso de enviar la información incorrecta la porpiedad **access** sea **`false`**.

<br />

---

### **👩‍💻 EJERCICIO 06 | POST /rickandmorty/fav**

Crea un nuevo describe con el texto : **"_POST /rickandmorty/fav_"**. Dentro de este test tendrás que validar:

1. Lo que envíes por body debe ser devuelto en un arreglo.

2. Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.

<br />

---

### **👩‍💻 EJERCICIO 07 | DELETE /rickandmorty/fav/:id**

Crea un nuevo describe con el texto : **"_DELETE /rickandmorty/fav/:id_"**. Dentro de este test tendrás que validar:

1. Primero deberás testear que lo que devuelva esta ruta, en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar.

2. Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje.

<br />

---

## **💪 EXTRA CREDIT | Testing Front-End**

Te invitamos a que revises los **`Recursos adicionales`** para investigar como testear un **Front-End** con React y Jest.

## **🔎 Recursos adicionales**

-  Documentación [**Matchers From Jest**](https://jestjs.io/docs/using-matchers)
-  Documentación [**React-Jest Testing**](https://testing-library.com/docs/react-testing-library/intro/)
-  Documentación [**Jest - Enzyme**](https://enzymejs.github.io/enzyme/docs/guides/jest.html)
