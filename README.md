# Передача конфига в шаблон
Данные из конфига [.infra.json](https://github.com/infrajs/config) расширений можно передать в [шаблон](https://github.com/infrajs/controller)

## Установка через composer

```
{
	"require":{
		"akiyatkin/layer-conf":"~1"
	}
}
```

## Использование

У слоя нужно добавить свойство **conf** c именем расширения, чей конфиг нужно загрузить. 
В шаблоне conf уже бужет тем самым конфигом. conf наследуется от родительского слоя ко всем вложенным.
В шаблон попадают только те свойства которые перечислены в свойстве ```pub```. 

### Например
Есть расширение testext с файлом .infra.json
```
{
	"pub":["js"],
	"js":"script.js"
}
```

У слоя указано
```
{
	"conf":"testext",
}
```

В шаблоне если вставить

```
Скрипт загружаемый вместе с расширением {conf.js}
```

Результат
```
Скрипт загружаемый вместе с расширением script.js
```