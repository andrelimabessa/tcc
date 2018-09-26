filename=document

all: compile
	
compile:
	@echo "Processing..."
	pdflatex $(filename).tex
	bibtex $(filename)
	makeglossaries $(filename)
	makeindex $(filename)
	pdflatex $(filename).tex
	pdflatex $(filename).tex
	@echo "Done!"

	
clean:
	@echo -n "Cleaning auxiliary files...\n"
	@rm -f *.out *.aux *.alg *.acr *.dvi *.gls *.log *.bbl *.blg *.ntn *.not *.lof *.lot *.toc *.loa *.lsg *.nlo *.nls *.ilg *.ind *.ist *.glg *.glo *.xdy *.acn *.idx *.loq *.lol *.gz *~
	@echo "Done!"