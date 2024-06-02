// sum = 1 + 5;

// console.log(sum)
// console.log('hello world')

//? чтобы вывести это в консоль, нужно прописать в терминале node index.js

//! ______ блокирующий ввод и вывод (I/O)
//? node.js – однопоточный, но ассинхронность достигается за счёт event loop
//? в его основе лежит Libuv, который может управлять потоками

// const crypto = require('crypto');

// const start = Date.now();

// console.log(start);

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', ()=> {
//   console.log('1 end', Date.now() - start)
// })

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', ()=> {
//   console.log('2 end', Date.now() - start)
// })

//! планировщик потоков (Thread scheduler)
//? выделает на сервере ресурсы (память, время и др. рес.) для вычисления потоков
//? внутри него есть пулл потоков (Thread pool)

//? ввели новый модуль worker_threads, с помощью которого можно управлять потоками


//! ______ демультиплексор событий (шаблон Reactor)
//? интерфейс уведомления о событиях
//? собирает события ввода и вывода и выставляет их в очередь 

//? демульт на Windows I/O Completion Port (IOCP)
//? демульт на macOS kqueue
//? демульт на Linux epol

//! event loop
//? выполняет события по очереди (1:Таймеры, 2:I/O коллбэки, 3:Ожидание/подготовка, 4:Опрос, 5:Проверка, 6:Коллбэки "close")



//! ______ Модули
//! process

// console.log(process.pid) //? позволяет получить id процесса

// while (true) {

// }

//? если в консоли ввести команду kill и подставить pid, процесс перестанет производиться

//! переменные окружения

// console.log(process.env) //? посмотреть часть уже созданных переменных окружения
// console.log(process.env.PORT) //? создали переменную PORT, но не проинициализировали её
//? чтобы проинициализировать её, нужно зайти в package.json, создать в "scripts" скрипт => ("start": "node index.js"). Он будет выполнять запуск файла index.js на node.js Чтобы его запустить, нужно в терминале ввести npm start

//? чтобы создавать переменные, нужно установить пакет cross-env (npm i cross-env)

//? изменяем скрипт "start": "node index.js" на "start": "cross-env PORT=5000 node index.js"

//? и запускаем npm i cross-env

//? теперь в консоли можно будет увидеть переменную окружения 5000

//? можно создать новую переменную NODE_ENV=production в скрипте "start": "cross-env PORT=5000 NODE_ENV=production node index.js"

//? для сборки переменных из разных файлов, нужно установить пакет npm i dotenv

//? чтобы запустить сторонний файл, его также нужно импортировать

// const dotenv = require('dotenv')
// dotenv.config()

// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

//! аргументы

// console.log(process.argv) //? можно запустить эту команду, сразу после неё написать слова и их покаже, как массив со строками

// if (Math.random() > 0.5) {
//   while (true) {

//   }
// } else {
//   console.log('Выполнение программы завершено!')
//   process.exit()
// }


//! ______ path
// ? стандартная файловая система
// ? позволяет указывать путь к файлу

// const path = require('path');

// console.log("Склеить участки пути", path.join('first', 'second', 'third')) //? first/second/third На разных операционных системах "слэши" заменяются разными сепараторами

// console.log(path.join(__dirname, 'first', 'second', 'third')) //? можно получить путь до файла /Users/gs/programming/node/from_Ulbi/first/second/third

// console.log(path.join(__dirname, '..', '..')) //? две точки позволяют выйти в папку назад /Users/gs/programming

// console.log('Получить абсолютный путь', path.resolve('first', 'second', 'third')) //? Получить абсолютный путь /Users/gs/programming/node/from_Ulbi/first/second/third

// const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')

// console.log('Парсинг пути', path.parse(fullpath)) //? Парсинг пути {
// ?  root: '/',
// ?  dir: '/Users/gs/programming/node/from_Ulbi/first/second',
// ?  base: 'third',
// ?  ext: '.js',
// ?  name: 'third'
// ?}

// console.log('разделитель в OS', path.sep) // ? разделитель в OS /
// console.log('проверка на абсолютный путь', path.isAbsolute('first/second')) // ? проверка на абсолютный путь false

// console.log('название файла', path.basename(fullpath)) // ? название файла third.js

// console.log('расширение файла', path.extname(fullpath)) // ? расширение файла .js


// const siteURL = 'http://localhost:8080/users?id=5123'

// const url = new URL(siteURL)

// console.log(url) //? URL {
// ?  href: 'http://localhost:8080/users?id=5123',
// ?  origin: 'http://localhost:8080',
// ?  protocol: 'http:',
// ?  username: '',
// ?  password: '',
// ?  host: 'localhost:8080',
// ?  hostname: 'localhost',
// ?  port: '8080',
// ?  pathname: '/users',
// ?  search: '?id=5123',
// ?  searchParams: URLSearchParams { 'id' => '5123' },
// ?  hash: ''
// ?}

//! ________ file

// const { rejects } = require('assert')
// const fs = require('fs')
// const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir')) //? вид синхронных функций. Метод создаёт папку dir

// console.log('START')

// fs.mkdir(path.resolve(__dirname, 'dir2', 'dir3', 'dir4'), (err) => {
//   if (err) {
//     console.log(err)
//     return;
//   } 

//   console.log('Папка создана')

// }) //? ахинхронная работа с функциями событийно-ориентированной моделью с помощью коллбэков. Он не может рекурсивно создавать папки 

//? [Error: EEXIST: file already exists, mkdir '/Users/gs/programming/node/from_Ulbi/dir2/dir3/dir4'] {
//?   errno: -17,
//?   code: 'EEXIST',
//?   syscall: 'mkdir',
//?   path: '/Users/gs/programming/node/from_Ulbi/dir2/dir3/dir4'
//? }
//? Папка создана

// console.log('END')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err;
//   }
// }) //? он обнаружил папку dir и удалил её

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '43 sfgkjn 53jn nlkns', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Файл записан')
// }) //? создаёт и записывает файлы


// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'переписанные данные', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Файл записан')
// }) //? если файл уже был создан, метод сотрёт его и напишет новые данные

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'добавить в конец', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Файл записан')
// }) //? чтобы что-то записать в конец файла


// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'переписанные данные', (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log('Файл записан')

//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'создали файл и дозаписали в него данные', (err) => {
//       if (err) {
//         throw err;
//       }

//       console.log('Добавил данные в файл')
//     })
//   }) //? если файл уже был создан, метод сотрёт его и напишет новые данные, но это вызывает АД КОЛЛБЭКОВ

//! лучше это делать через promices

//? новый способ
// const fsPromices = require('fs/promises')

// fsPromices.mkdir('/').then().catch()
// fsPromices.readFile('/').then().catch()
// fsPromices.writeFile('/').then().catch()
// fsPromices.appendFile('/').then().catch()
// fsPromices.rm('/').then().catch()
// fsPromices.rmdir('/').then().catch()

//? старый способ через создание функции по написанию promices

// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message)
//       }
//       resolve()
//     })
//   )
// }

// const appendFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message)
//       }
//       resolve()
//     })
//   )
// }

// const writeFileAsync = async (path, data) => {
//   return new Promise ((resolve, rejects) => fs.writeFile(path, data, (err) => {
//     if (err) {
//       return rejects(err.message)
//     }

//     resolve()
//   }))
// }

// const appendFileAsync = async (path, data) => {
//   return new Promise ((resolve, rejects) => fs.appendFile(path, data, (err) => {
//     if (err) {
//       return rejects(err.message)
//     }

//     resolve()
//   }))
// }

// writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'создание нового файла и запись новых данных')
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'ещё дозаписанные данные'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'ещё дозаписанные данные 2'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'ещё дозаписанные данные 3'))
//   .catch(err => console.log('err'))

// const readFileAsync = async (path, data) => { //? метод для чтения файла
//   return new Promise ((resolve, rejects) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => { //? поставить кодировку. Без код. будет буфер
//     if (err) {
//       return rejects(err.message)
//     }

//     resolve(data)
//   }))
// }

// const removeFileAsync = async (path) => { //? метод для удаления файла
//   return new Promise ((resolve, rejects) => fs.rm(path, (err) => { 
//     if (err) {
//       return rejects(err.message)
//     }

//     resolve()
//   }))
// }

// removeFileAsync(path.resolve(__dirname, 'test2.txt'))
//   .then(() => console.log('Файл test2.txt был удалён'))

// writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'создание нового файла и запись новых данных')
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'ещё дозаписанные данные'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'ещё дозаписанные данные 2'))
//   .then(() => readFileAsync(path.resolve(__dirname, 'test2.txt')))
//   .then(data => console.log(data))
//   .catch(err => console.log('err'))

// todo 1) Через переменную окружения передать строку. Записать её в файл. 
// todo 2) Прочитать файл. Посчитать количество слов в файле
// todo 3) Записать их в файл count.txt и удалить первый файл
// const dotenv = require('dotenv')
// dotenv.config()

// const text = process.env.TEXT || '';

// const createFile = async (path, data) => {
//   return new Promise ((resolve, rejects) => fs.writeFile(path, data, (err) => {
//     if (err) {
//       return rejects(err.message)
//     } 

//     resolve()
//   }))
// }

// const readFile = async (path, data) => {
//   return new Promise ((resolve, rejects) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//       return rejects(err.message)
//     }

//     resolve(data)
//   }))
// }

// const removeFile = async (path) => {
//   return new Promise((resolve, rejects) => fs.rm(path, (err) => {
//     if (err) {
//       return rejects(err.message)
//     }

//     resolve()
//   }))
// }

// createFile(path.resolve(__dirname, 'test3.txt'), process.env.INFO)
//   .then(() => readFile(path.resolve(__dirname, 'test3.txt')))
//   .then(data => createFile(path.resolve(__dirname, 'count.txt'), data.length.toString()))
//   .then(() => removeFile(path.resolve(__dirname, 'test3.txt')))
//   .catch(err => console.log('err'))

// createFile(path.resolve(__dirname, 'text4.txt'), text)
//   .then(() => readFile(path.resolve(__dirname, 'text4.txt')))
//   .then(data => data.split(' ').length)
//   .then(count => createFile(path.resolve(__dirname, 'count.txt'), `Количество слов ${count}`))
//   .then(() => removeFile(path.resolve(__dirname, 'text4.txt')))

//? чтобы запустить этот код, в терминале можно ввести npx cross-env /*вставить название переменной и её значение*/ => /* путь до файла */ node index.js


//!__________ операционная система 


// const os = require('os'); //? обращается к операционной системе
// const cluster = require('cluster') //? позволяет однопоточному node запускать все дочерние процесси на многоядерных системах

// console.log(os.platform()) //? позволяет получить операционную систему (аналог process.platform)

// console.log(os.arch()); //? метод для определения архитектуры процессора 

// console.log(os.cpus()); //? возвращает массив с параметрами каждого ядра процессора
// console.log(os.cpus().length); //? показывает количество ядер

// if (cluster.isMaster) { //? проверяем, является ли он главным
//   for (let i = 0; i < os.cpus().length - 1; i++) {
//     cluster.fork(); //? так запускаем дочерний процесс
//   }
//   cluster.on('exit', (worker, code, signal) => { 
//     console.log(`Воркер с pid=${worker.process.pid} умер`)
//     // if (code === ) {
//     //   // cluster.fork()
//     // } else {
//     //   console.log('Воркер умер...')
//     // }
//   })
// } else {
//   console.log(`Воркер с pid=${process.pid} запущен`) //? воркером называют дочерний процесс

//   setInterval(() =>{
//     console.log(`Воркер с pid=${process.pid} ещё работает`)
//   }, 5000)
// }

// !_______ события events

// const Emitter = require('events');

// const emitter = new Emitter();

// emitter.on('message', (data, second, third) => {
//   console.log('Вы прислалии сообщение ' + data);
//   console.log('Второй аргумент ' + second);
// })

// const MESSAGE = process.env.message || '';

// if (MESSAGE) {
//   emitter.emit('message', MESSAGE, 123)
// } else {
//   emitter.emit('message', 'Вы не указали сообщение')
// }

// emmiter.once('message') //? создаёт событие единожды

// emmiter.emit('message')
// emmiter.emit('message')
// emmiter.emit('message')
// emmiter.emit('message')

// emitter.removeAllListeners() //? удалить все слушатели
// emitter.removeListeners('message') //? удалить конкретный слушатель


//! _____ stream (не тоже самое, что и thread)
//? Стримы нужны для передачи больших файлов. Их читают по одному через стримы и передают (по умолчанию, размер одного файла 64 (Кбайта) килобайта)

//? Стримов есть 4 типа стримов
//? Readable – для чтения
//? Writable – для записи
//? Duplex – для чтения и записи Readable + Writable
//? Transform – как Duplex но может менять данные в процессе чтения

//? Предположим, что есть текстовый файл text.txt, который весит очень много

// const fs = require('fs')
// const { request } = require('http')
// const path = require('path')

// fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   } 
//   console.log(data) //? файл прочитается полоностью, покажет его вес и будет делать это долго
// })

//? лучше будет создать стрим

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {encoding: 'utf-8'}) //? можем указать путь, имя файла и кодировку

// stream.on('data', (chunk) => {
//   console.log(chunk) // ? <Buffer d0 bf d0 b5 d1 80 d0 b5 d0 bf d0 b8 d1 81 d0 b0 d0 bd d0 bd d1 8b d0 b5 20 d0 b4 d0 b0 d0 bd d0 bd d1 8b d0 b5 d1 81 d0 be d0 b7 d0 b4 d0 b0 d0 bb d0 ... 59 more bytes> //? если файл будет большой, он создасть несколько кусков по 64 Кбайта
// })

// stream.on('end', () => console.log('Закончил читать'))
// stream.on('open', () => console.log('Начал читать'))
// stream.on('error', (e) => console.log(e)) //? обязательно указывать обработку ошибок

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

// for(let i = 0; i < 20; i++) {
//   writableStream.write(i + '\n')
// }

// writableStream.end() //? обязательно нужно заканчивать writableStream
// writableStream.close() //? тоже закрывает writableStream
// writableStream.destroy() //? тоже закрывает writableStream
// writableStream.on('error') //? тоже закрывает writableStream

// const http = require('http')

// http.createServer((req, res) => {
//   //req - readable stream
//   //res - writable stream
//   const stream = fs.createReadStream(path.resolve(__dirname, 'test3.txt'))

//   //? стрим закончит читать файл раньше, чем пользователь его скачает
//   // stream.on('data', chunk => res.write(chunk))  
//   // stream.on('end', chunk => res.end())  
//   //? для этого придумали метод pipe
//   stream.pipe(res)
// })

//!____ создание своего http сервера

const http = require('http')

const EventEmitter = require('events')

const PORT = process.env.PORT || 5000

const emitter = new EventEmitter()

//!____ создание своего фреймворка

class Router {
  constructor() {
    this.endpoints = {}
  }

  request(metod = 'GET', path, handler) {
    if(!this.endpoints[path]) {
      this.endpoints[path] = {}
    }

    const endpoint = this.endpoints[path]

    if(endpoint[metod]) {
      throw new Error(`[${metod}] по этому адресу ${path} уже существует`)
    }

    endpoint[metod] = handler

    emitter.on(`[${path}]:[${metod}]`, (req, res) => {
      handler(req, res)
    })
  }

  get(path, handler) {
    this.request('GET', path, handler)
  }
  
  post(path, handler) {
    this.request('POST', path, handler)
  }

  put(path, handler) {
    this.request('PUT', path, handler)
  }

  delete(path, handler) {
    this.request('DELETE', path, handler)
  }
}

const router = new Router()

router.get('/users', (req, res) => {
  res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts', (req, res) => {
  res.end('YOU SEND REQUEST TO /POSTS')
})

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-type': 'text/html; charset=utf-8'
  // })
  // res.end('<h1>Сервер работает!</h1><button>Submit</button>')

  // res.writeHead(200, {
  //   'Content-type': 'application/json'
  // })

  // if (req.url === '/users') {
  //   return res.end(JSON.stringify([{
  //     id: 1, name: 'Georg'
  //   }]))
  // }
  // if (req.url === '/posts') {
  //   return req.end('POSTS')
  // }
  // res.end('<h1>Сервер работает!</h1><button>Submit</button>')

  const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)

  if(!emitted) {
    res.end()
  }
})

server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))


