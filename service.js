let versao = 7
let arquivos = [
  './',
  './index.html',
  './inline.bundle.js',
  './styles.bundle.js',
  './vendor.bundle.js',
  './main.bundle.js'
]
self.addEventListener("install", function(){
    console.log("Instalou")
})
self.addEventListener("activate", function(){
    caches.open("ceep-arquivos-" + versao).then(cache => {
        cache.addAll(arquivos)
            .then(function(){
                caches.delete("ceep-arquivos-" + (versao - 1 ))   
                caches.delete("ceep-arquivos")   
            }) 
    })
})
self.addEventListener("fetch", function(event){
    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })
    event.respondWith(promiseResposta)
})
