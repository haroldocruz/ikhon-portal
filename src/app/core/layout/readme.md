# LAYOUT

_03 de Jun. de 2022._

**Este módulo organiza os _layouts_ do projeto de forma que, sempre que for preciso, o _layout_ atual possa ser trocado pela aplicação.**


O layout seguirá o mesmo do template _Admin PRO_, com 4 partes principais: _nav_, _top_, _content_ e _footer_. Esse template foi construído usando a biblioteca _Bootstrap 5_, a qual trabalha com conceitos de _grid layout_ e _breakpoints_.

Os _breakpoints_ são medidas usadas para quebra de _layout_ que ajudam em uma visualização UI responsiva. As medidas padrão dos _breakpoints_, são estas:

>**Medidas padrão:**
XS < 576px 
SM >= 576px
MD >= 768px
LG >= 992px
XL >= 1200px
XXL > 1400px

**Para viewports de largura SM (_>=576px_):**

- *nav* ficará ocupando toda a lateral esquerda com largura aproximada de 20%.
- *top* ficará na parte de cima ocupando desde a margem direita de *nav* até a margem direita da viewport, com altura aproximada de 15%.
- *footer* ficará na parte de baixo ocupando desde a margem direita de *nav* até a margem direita da viewport, com altura aproximada de 15% e sem posição fixa.
- *content* ficará com todo o restante da viewport.

**Para viewports de largura XS (_<576px_):**
- *nav* ficará oculta. Quando visível, sobreporá os demais conteúdos, ocupando toda a lateral esquerda com largura aproximada de 70% (portrait mode) ou 40% (landscape mode).
- *top* ficará ocupando toda a parte superior, com altura aproximada de 15%.
- *footer* ficará ocupando toda a parte inferior, com altura aproximada de 15% sem posição fixa.
- *content* ficará com todo o restante da viewport, posicionado entre *top* e *footer*


Materia de apoio: https://getbootstrap.com/docs/5.0/layout/breakpoints/