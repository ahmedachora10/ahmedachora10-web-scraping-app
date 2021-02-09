export default class JobsApi {
    constructor(url) {

        this._url = url;
    }

    async get() {

        const data = {
            keywords: await this.keywords(),
            numbers: await this.countNumber(),
            bigger: await this.bigger()
        };

        return data;
    }

    async specialKeywords() {

        const specialKeywords = [
            'laravel',
            'php',
            'js',
            'javascript',
            'مخازن',
            'سينما',
            'حجز'
        ];

        // const foundKeywords = (await this.keyWords()).filter(keyword => specialKeywords.includes(keyword));
        const keywords = await this.findAll();
        const result = {};

        for (const keyword in keywords) {
            if (Object.hasOwnProperty.call(keywords, keyword)) {
                if (!specialKeywords.includes(keyword)) continue;
                const value = keywords[keyword];
                result[keyword] = value;
            }
        }

        return result;

    }

    async findAll() {

        const response = await fetch(this._url);
        return response.json();

    }

    async countNumber() {

        const keywords = await this.specialKeywords();
        return await Object.values(keywords);

    }

    async keywords() {

        const keywords = await this.specialKeywords();
        return await Object.keys(keywords);

    }

    async bigger() {

        const count = await this.countNumber();
        return Math.max(...count);

    }

}