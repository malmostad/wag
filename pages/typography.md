---
layout: default
title:  Typography
permalink: /typography/
---

# Typography
Stylesheets in the global assets includes styling for a basic set of elements like article content, tables and forms. For elements not listed in the WAG, you will have to set the styling yourself based on the specification and examples below.

## Typefaces
The serif typeface [Georgia](http://en.wikipedia.org/wiki/Georgia_(typeface)) is used for body copy and headings in articles. The sans serif typeface [Open Sans](http://en.wikipedia.org/wiki/Open_Sans) is used for menus, navigation, tables, captions, preambles and short pieces of text. Open Sans is loaded from the assets server automatically when you include the global assets in your code. Use the full `font-family` declarations with backup families found in the [variables Sass file](https://github.com/malmostad/intranet-assets/blob/master/app/assets/stylesheets/variables.css.scss).

## Font Size
Font sizes should be specified with relative units, i.e. `em` or `%`. You must respect the user device and leave the font size for the `body` element to 100%. All text styling included in the assets, e.g. article content (below) and tables are based on this.

### Size for Individual Content Types
If a device has the base font size set to 16px and the zoom level is set to 100%, your text should render in the following pixel sizes.

| ------------------------------------------------------ | ---------------- | --------- | ------------ |
|                      Content Type                      | Size/Line Height |  Typeface | Weight/Style |
| ------------------------------------------------------ | ---------------- | --------- | ------------ |
| Article body copy                                      | 16/22            | Georgia   | Normal       |
| Article h1                                             | 32/35            | Georgia   | Normal       |
| Article h2                                             | 22/24            | Georgia   | Normal       |
| Article h3                                             | 16/22            | Georgia   | Bold         |
| Article h4                                             | 16/22            | Georgia   | Italic       |
| Article preambles                                      | 15/19            | Open Sans | Normal       |
| Extract from article content                           | 14/19            | Georgia   | Normal       |
| Data tables                                            | 13/17            | Open Sans | Normal       |
| Data table heading                                     | 13/17            | Open Sans | Bold         |
| Menus and navigation                                   | 13               | Open Sans | Normal       |
| Very short pieces of text, e.g. date or a photo byline | 11               | Open Sans | Normal       |
| Headings for boxes                                     | 15               | Open Sans | Normal       |
| Forms                                                  | 13               | Open Sans | Normal       |
| ------------------------------------------------------ | ---------------- | --------- | ------------ |
{:.full.wrap}

Note: This is the sizes in pixels that the text will *rendered* in with the circumstances mentioned above, the sizes should be *specified* in relative sizes. An exception to this rule is font size in forms that are set in absolute units using `px`. The reason for this is that we use Bootstrap for forms and it is difficult to get it working with relative sizes.

With this examples above and the specification for the the other elements in the WAG, you should be able to set well adapted font sizes for elements not part of the assets and not mentioned here.

## Text Color
Almost exclusively black text on white background.

## Article Content
The `body-copy` class in a container is used for article content to get headings, paragraphs and lists styled. Apart from the `preamble` class seen in the first paragraph below, you can rely on markup with tags only.

<div class="example">
  <article class="body-copy">
    <h1>Article Heading</h1>

    <p class="preamble">
      Preamble, sed ad homero similique. Et has everti oportere
      adversarium, epicuri singulis persequeris ea qui, dissentiet
      philosophia eu est. Animal aeterno minimum id nam, eos ex omnes
      debitis interpretaris. Possim timeam nec te. Alia enim ex usu, in
      mazim consul duo.
    </p>

    <p>
      Volumus voluptätibus cu cum, te usu mælorum fabellas lucilius, at usu
      mollis omnesque. Per deträxit repudiåre ei, åt vim eligendi
      inciderint. Ei sit fugit exerci äudiam, et qui magnæ delenit! Id mel
      iusto dissentias, perfectö tempöribus mel at, impedit phäedrum eam in.
      Debitis petentium his ei, ea per civibus pericula.
    </p>

    <h2>Heading Level Two</h2>
    <p>
      Possum intellegåm pri ei, eu atqui corpora ius. Doming målorum
      discere id pro, æd iracundiå suscipiåntur mel? Tritæni feugiæt an per,
      cum quod utinam labore in? Usu id errem nostrud reprimique. Ex legimus
      sensibus sed. Nihil congue legendos sit eu, sit primis.
    </p>

    <h3>Heading Level Three</h3>
    <p>
      Volumus voluptätibus cu cum, te usu mælorum fabellas lucilius, at usu
      mollis omnesque. Per deträxit repudiåre ei, åt vim eligendi
      inciderint. Ei sit fugit exerci äudiam, et qui magnæ delenit! Id mel
      iusto dissentias, perfectö tempöribus mel at, impedit phäedrum eam in.
      Debitis petentium his ei, ea per civibus pericula.
    </p>

    <h4>Heading Level Four</h4>
    <p>
      Duo åd magnä ænimæl sälutændi. Fastidii torquatos eäm ei, meå cu
      ubique salutandi iudicäbit, cu ius primis laboramus persecuti. Graece
      håbemus scåevola eæm ut. Cu solet inciderint vel, eos denique ålbucius
      petentium te. Homero vidisse civibus no seå.
    </p>

    <ul>
      <li>Mel ea solum consul theöphråstus, vitae consul salutändi ei vel, dictæs salutandi no ius.</li>
      <li>Ludus quäestiö eu qui, än unum äperiam vis. His äd vidisse scripta suscipiantur. Est dictas percipit æn.</li>
      <li>Mel eu dölöre pöstea scæevölå, söluta låbore.</li>
    </ul>

    <ol>
      <li>Utroque quo eu. Tötä appareat eloquentiæm est an.</li>
      <li>Ludus quäestiö eu qui, än unum äperiam vis. His äd vidisse scripta suscipiantur. Est dictas percipit æn.</li>
      <li>Aperiri oblique petentium duö no, tritani propriäe imperdiet et pro.</li>
      <li>Prö cibo idque cu. Opörtere disputändo neglegentur duo id?</li>
    </ol>

    <p>
      Duo åd magnä ænimæl sälutændi. Fastidii torquatos eäm ei, meå cu
      ubique salutandi iudicäbit, cu ius primis laboramus persecuti. Graece
      håbemus scåevola eæm ut. Cu solet inciderint vel, eos denique ålbucius
      petentium te. Homero vidisse civibus no seå.
    </p>
  </article>
</div>

{% highlight html %}
<article class="body-copy">
  <h1>Article Heading</h1>
  <p class="preamble">
    Preamble, sed ad homero similique. Et has everti oportere...
  </p>
  <p>
    Volumus voluptätibus cu cum, te usu mælorum fabellas lucilius, at usu...
  </p>

  <h2>Heading Level Two</h2>
  <p>
    Possum intellegåm pri ei, eu atqui corpora ius. Doming målorum...
  </p>

  <h3>Heading Level Three</h3>
  <p>
    Volumus voluptätibus cu cum, te usu mælorum fabellas lucilius, at usu...
  </p>

  <h4>Heading Level Four</h4>
  <p>
    Duo åd magnä ænimæl sälutændi. Fastidii torquatos eäm ei, meå cu...
  </p>
  <ul>
    <li>Mel ea solum consul theöphråstus, vitae consul salutändi...</li>
  </ul>
  <ol>
    <li>Utroque quo eu. Tötä appareat eloquentiæm est an...</li>
  </ol>
  <p>
    Duo åd magnä ænimæl sälutændi. Fastidii torquatos eäm ei, meå cu...
  </p>
</article>
{%  endhighlight %}
