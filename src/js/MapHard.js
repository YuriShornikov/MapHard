export default class Settings {
    constructor() {

        // Настройки по умолчанию
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ])

        // Пользовательские настройки
        this.userSettings = new Map();
    }

    // Метод для установки пользовательской настройки
    setUserSetting(name, value) {
        this.userSettings.set(name, value);
    }

    // Get для объединенных настроек
    get settings() {
        
        // Объединение default'ных и пользовательских настроек
        return new Map([...this.defaultSettings, ...this.userSettings]);
    }
}

