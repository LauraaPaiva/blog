---
created: 2026-10-18T19:30:00Z
revision: 2026-10-18T19:30:00Z
ação: true
tags:
  - paperclip
  - bim
  - hidrossanitario
status: distribuivel
---

# Checklist BIM para Projetos Hidrossanitários

**Laura Paiva · LaPaiva Digital · Versão 1.1 · Outubro de 2026**

Roteiro de conferência de água fria, água quente, esgoto e águas pluviais em BIM. Use cada item para registrar a verificação, a evidência no modelo ou memorial e o responsável. Um item marcado não representa, por si só, atendimento normativo.

**Referência atualizada:** a ABNT NBR 5626:2020 abrange sistemas prediais de água fria **e água quente**, incluindo projeto, execução, operação e manutenção. Ela cancela e substitui a ABNT NBR 5626:1998 e a ABNT NBR 7198:1993 [1, 2]. A NBR 7198 é referência histórica, não uma segunda norma atual para água quente.

Este roteiro não fixa dimensões, afastamentos, pressões, velocidades ou períodos de retorno universais. Registre os critérios aplicáveis ao empreendimento a partir da norma, cálculo, legislação local e documentação dos fabricantes. Cores e identificações do modelo são convenções do projeto, não exigências normativas aqui demonstradas.

## 1. Configuração do template e parâmetros

- [ ] Template e convenções de modelagem definidos para a entrega.
- [ ] Sistemas AF, AQ, esgoto, ventilação e pluvial separados e identificáveis.
- [ ] Materiais e classes de pressão/temperatura especificados para cada aplicação.
- [ ] Famílias, conectores e preferências de roteamento testados.
- [ ] Parâmetros de sistema, material, DN, vazão, pressão, velocidade e declividade previstos quando aplicáveis.
- [ ] Unidades dos parâmetros conferidas, inclusive conversões de pressão.
- [ ] Níveis, coordenadas e vínculos de arquitetura e estrutura conferidos.
- [ ] Filtros, cores, siglas e tags documentados para leitura consistente.

## 2. Água fria — ABNT NBR 5626:2020

- [ ] População, usos e consumo de projeto documentados.
- [ ] Método de determinação de vazões justificado no memorial, sem adoção automática de um único método para todos os casos.
- [ ] Perdas de carga distribuídas e localizadas calculadas por trecho.
- [ ] Pressões estáticas e dinâmicas verificadas, considerando equipamentos, pontos críticos e requisitos aplicáveis.
- [ ] Velocidades, ruído e transientes avaliados pelo critério de projeto.
- [ ] Alimentação, reservação e distribuição modeladas com volumes e cotas coerentes com o cálculo.
- [ ] Reserva potável e eventual reserva de incêndio compatibilizadas, preservando potabilidade e volumes necessários.
- [ ] Extravasamento, limpeza, proteção contra refluxo e acesso para manutenção previstos conforme solução adotada.
- [ ] Barriletes, colunas, ramais, registros e eventual redução de pressão identificados e acessíveis.

## 3. Água quente — ABNT NBR 5626:2020

- [ ] Sistema de aquecimento e demanda definidos, com temperaturas de projeto documentadas.
- [ ] Materiais e componentes compatíveis com pressão, temperatura e qualidade da água.
- [ ] Necessidade de recirculação avaliada por desempenho, tempo de espera, perdas e uso; sem gatilho universal por distância ou pavimentos.
- [ ] Isolamento térmico especificado e representado conforme cálculo e solução construtiva.
- [ ] Dilatação, suportação, segurança, controle de temperatura e proteção contra queimaduras avaliados.
- [ ] Dispositivos de expansão, alívio, drenagem e recirculação previstos quando exigidos pela configuração adotada.
- [ ] Afastamentos e interfaces com água fria e outras instalações definidos por critérios aplicáveis, não por uma distância genérica.

## 4. Esgoto sanitário — ABNT NBR 8160

- [ ] Contribuições dos aparelhos e critérios de dimensionamento registrados.
- [ ] Diâmetros e declividades definidos por trecho conforme cálculo e requisitos aplicáveis; sem regra única por “primário/secundário”.
- [ ] Sentido de escoamento e cotas de chegada e saída conferidos no modelo.
- [ ] Desconectores e proteção dos fechos hídricos previstos conforme os aparelhos atendidos.
- [ ] Ventilação dimensionada para a configuração do sistema; diâmetros e terminais não presumidos como universais.
- [ ] Tubos de queda, ramais, subcoletores e dispositivos de inspeção identificados e acessíveis.
- [ ] Caixas de gordura e demais dispositivos definidos conforme contribuição e requisitos locais.
- [ ] Ligação à rede pública ou tratamento local compatibilizada com cotas, capacidade e exigências do prestador/órgão competente.

## 5. Águas pluviais — ABNT NBR 10844

- [ ] Dados de chuva e área de contribuição documentados por trecho de captação.
- [ ] Duração e período de retorno escolhidos conforme aplicação e consequências de extravasamento, com fonte no memorial.
- [ ] Calhas, condutores verticais e horizontais dimensionados, com cotas e declividades conferidas.
- [ ] Pontos de inspeção, limpeza e acesso previstos.
- [ ] Destino das águas pluviais definido segundo regras locais, sem ligação presumida ao esgoto sanitário.
- [ ] Extravasamento e caminhos de escoamento em falha avaliados.
- [ ] Aproveitamento de água pluvial, quando existente, tratado como sistema próprio, com referências específicas e prevenção de conexão cruzada com água potável.

## 6. Recalque, pressurização e shafts

- [ ] Vazão, altura manométrica e ponto de operação das bombas documentados.
- [ ] Sucção, recalque, válvulas, suportes e acesso compatíveis com cálculo e instruções dos fabricantes.
- [ ] Necessidade de redundância, controle e proteção contra transientes avaliada.
- [ ] Shafts dimensionados para montagem, isolamento, manutenção e interfaces reais, sem folga fixa por tubo.
- [ ] Arranjo das redes e acessos coordenado entre disciplinas e pavimentos.

## 7. Interfaces com arquitetura e estrutura

- [ ] Reservas, aberturas e travessias identificadas com posição, dimensão e cota.
- [ ] Intervenções em elementos estruturais submetidas ao projetista de estrutura; a compatibilização BIM não autoriza executar furos.
- [ ] Apoios e cargas de reservatórios e equipamentos compatibilizados com a estrutura.
- [ ] Alinhamento de shafts, níveis de pisos, forros e acesso às instalações conferidos.
- [ ] Impermeabilização, selagem e compartimentação das passagens compatibilizadas quando aplicáveis.

## 8. Compatibilização com demais disciplinas

- [ ] Interferências geométricas avaliadas com tolerâncias e prioridades definidas no projeto.
- [ ] Interfaces com elétrica e gás verificadas segundo requisitos aplicáveis e soluções das disciplinas responsáveis.
- [ ] PCI compatibilizado quanto a reservação, acesso e espaço de instalação/manutenção.
- [ ] HVAC compatibilizado quanto a dutos, drenos e espaço disponível; destino de condensado definido pela disciplina responsável, sem conexão automática ao esgoto.
- [ ] Espaços de operação, montagem e manutenção conferidos além da detecção de colisões.
- [ ] Pendências encaminhadas aos responsáveis e decisões registradas.

## 9. Documentação e pranchas

- [ ] Plantas, cortes, isométricos e detalhes coerentes com o modelo e com o escopo contratado.
- [ ] Diâmetros, cotas, declividades, sistemas e materiais identificados onde necessários.
- [ ] Quantitativos conferidos por sistema, material e dimensão, com unidades explícitas.
- [ ] Memorial de cálculo e especificações consistentes com a revisão do modelo.
- [ ] Exportação IFC conferida quanto a geometria, propriedades e requisitos de entrega.

## 10. Antes de entregar

- [ ] Conectividade e eventuais extremidades abertas conferidas segundo a intenção do sistema.
- [ ] Warnings relevantes triados e tratados ou justificados; “zero warnings” não é garantia de qualidade.
- [ ] Limpeza do arquivo executada de forma controlada, preservando dados e famílias necessários.
- [ ] Tags, cotas, revisões e quantitativos revisados.
- [ ] Arquivos e vínculos da entrega identificados por revisão e disponibilizados no ambiente combinado.
- [ ] Revisão pelo responsável técnico registrada; itens pendentes e exceções explicitados.

## Referências e limites desta revisão

1. **Sinduscon-DF / Agência CBIC**, “Publicada norma ABNT de Sistemas prediais de água fria e água quente”, 14/07/2020. Confirma escopo e substituição das NBRs 5626:1998 e 7198:1993: https://sinduscondf.org.br/publicada-norma-abnt-de-sistemas-prediais-de-agua-fria-e-agua-quente/
2. **Almeida e Teixeira**, “Análise comparativa da atualização da norma brasileira NBR 5626:2020 em relação às normas NBR 5626:1998 e NBR 7198:1993”, Revista Tecnológica da Universidade Santa Úrsula, v. 4, n. 2, 2021: https://revistas.icesp.br/index.php/TEC-USU/article/view/1685/0
3. **Catálogo ABNT**, consulta de títulos, edições, emendas e situação das normas: https://www.abntcatalogo.com.br/

NBR 8160 e NBR 10844 orientam, respectivamente, esgoto sanitário e águas pluviais. NBR 6118, série NBR 15575, NBR 5688 e série ISO 19650 podem ter aplicação nas interfaces estruturais, desempenho habitacional, componentes de PVC e gestão da informação, dentro de seus escopos; não são uma certificação deste checklist. Verifique as edições aplicáveis ao contrato e ao empreendimento no catálogo e nas fontes oficiais. Esta revisão não realizou auditoria integral de todas as normas.

**O que mudou desde a v1.0:** referência de água quente corrigida; valores e regras genéricas sem sustentação específica retirados (inclusive tabela de períodos de retorno); promessas de conformidade/ausência de retrabalho removidas; mantidas as dez frentes de conferência. Identificação de série e CTA ficam na publicação editorial, fora do arquivo técnico.

**Limite técnico:** revisão documental com fontes públicas, sem validação atribuída a especialista. Este roteiro não substitui normas, memorial de cálculo, ART nem aprovação do responsável técnico da disciplina.

© 2026 LaPaiva Digital.
