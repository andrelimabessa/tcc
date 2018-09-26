# TCC

## Configuração

### Linux

#### Preparação de ambiente

Para executar este projeto, os seguintes pacotes são necessários:

```bash
sudo apt-get -y install texlive \
  texlive-latex-extra \
  texlive-lang-portuguese \
  texlive-publishers \
  texlive-science \
  texlive-fonts-recommended \
  texlive-bibtex-extra \
  texlive-generic-extra
```

Após a instalação dos pacotes, basta clonar este projeto e executar o script `generate.sh`.

```bash
git clone git@github.com:hpedrorodrigues/tcc.git

cd tcc

./generate.sh
```

## Referências

- [abnTeX](http://www.abntex.net.br)
- [ueceTeX2](http://thiagodnf.github.io/uecetex2) - [Github](https://github.com/thiagodnf/uecetex2)


### LaTeX Editors

- [TexMaker](http://www.xm1math.net/texmaker/index.html)
- [TeXstudio](http://www.texstudio.org)

### Versões

Versões dos pacotes utilizados na construção deste projeto:

```
PdfTeX 3.14159265-2.6-1.40.17 (TeX Live 2016/Debian)
BibTeX 0.99d (TeX Live 2016/Debian)
Makeglossaries Version 2.20 (2016-12-16)
Makeindex, version 2.15 [TeX Live 2016] (kpathsea + Thai support)
```