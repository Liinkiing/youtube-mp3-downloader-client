<p align="center">

<img width="600" src="https://github.com/Liinkiing/youtube-mp3-downloader-client/raw/master/public/images/og.jpg?raw=true">

</p>

# YouTube mp3 downloader
[https://ytomp3.now.sh](https://ytomp3.now.sh) (again, no name idea sorry 👼)

A small website made mainly as an excuse to test [Mercure](https://mercure.rocks) and 
communication between a PHP process in a async message using [Messenger](https://github.com/symfony/messenger) 
and a **NodeJS** process (the CLI that converts the YouTube video into an MP3), then
it's uploaded to **Amazon S3**

## ⚠ Read this
If the website is slow to respond to any of your conversion request, it is either because 
my **free** heroku Dynos are waking up, or because another process is already in use. 
Because I'm using only the free dynos in Heroku, I have just one free worker process, 
so it can handle just one process at a time, so yeah it scales **VERY POORLY** (don't want 
to pay actually because it was more of a hobby side project than a real thing)


## The CLI
The CLI used to make the conversion is a small CLI I've made specifically for this projet. 
It is available here: [https://github.com/Liinkiing/ytomp3](https://github.com/Liinkiing/ytomp3)

## The backend
If you wanna see the backend (a **Symfony 5** powered back-end), go here : [https://github.com/Liinkiing/youtube-mp3-downloader-api](https://github.com/Liinkiing/youtube-mp3-downloader-api)

## Special thanks
- [@itsleath](https://github.com/itsleath) for the beautiful design ⬛
