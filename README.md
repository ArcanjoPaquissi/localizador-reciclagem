🌱 Localizador de Reciclagem

O Localizador de Reciclagem é um aplicativo mobile desenvolvido com React Native (Expo) que permite localizar, cadastrar e visualizar pontos de coleta de resíduos recicláveis.
O app também inclui uma seção educativa, oferecendo informações sobre Plástico, Papel, Vidro e Metal para incentivar a conscientização ambiental.

🚀 Funcionalidades
📍 Pontos de Coleta

Cadastrar novos pontos com:

Nome

Tipo de material coletado

Foto

Localização via GPS

Visualização no mapa interativo (react-native-maps)

Edição e exclusão de pontos

Lista completa de pontos cadastrados

📘 Educação Ambiental

Páginas dedicadas para cada tipo de material:

Plástico

Papel

Vidro

Metal

👤 Perfil do Usuário

Total de pontos cadastrados

Dados armazenados localmente via AsyncStorage

🧰 Tecnologias Utilizadas

React Native (Expo)

Expo SDK

expo-location

expo-image-picker

react-native-maps

AsyncStorage

React Navigation (Stack + Bottom Tabs)

📂 Estrutura do Projeto

Aqui está uma estrutura profissional e clara do seu repositório:

localizador-reciclagem/
│
├── src/
│   ├── components/
│   │   ├── MapMarker.js
│   │   └── MaterialCard.js
│   │
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── MapScreen.js
│   │   ├── AddPointScreen.js
│   │   ├── EditPointScreen.js
│   │   ├── ListPointsScreen.js
│   │   ├── ProfileScreen.js
│   │   └── materials/
│   │       ├── PlasticScreen.js
│   │       ├── PaperScreen.js
│   │       ├── GlassScreen.js
│   │       └── MetalScreen.js
│   │
│   ├── data/
│   │   └── materialsInfo.js
│   │
│   ├── storage/
│   │   └── pointsStorage.js
│   │
│   ├── hooks/
│   │   └── useLocation.js
│   │
│   └── utils/
│       └── validateFields.js
│
├── assets/
│   ├── icons/
│   └── images/
│
├── App.js
├── package.json
├── app.json
└── README.md
