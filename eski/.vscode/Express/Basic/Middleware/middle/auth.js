const auth = (req, res, next) => {
    console.log(`authentication işlemi ${new Date().toUTCString()}`);
}

module.exports = auth;
// bu dosyayı başka bir dosyada kullanmak için export gerekir