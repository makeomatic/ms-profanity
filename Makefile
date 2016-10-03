update:
	git clone git@github.com:LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words.git .temp
	npm run update || make clean
	make clean

clean:
	rm -rf .temp
