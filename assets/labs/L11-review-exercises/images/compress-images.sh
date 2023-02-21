cd static/images/
for i in *.jpg; do
	mogrify -quality 10% $i
	echo $i
done