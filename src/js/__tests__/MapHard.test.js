import Settings from '../MapHard';

describe('test Settings', () => {
    test('set settings', () => {
        const settings = new Settings();
        settings.setUserSetting('music', 'rock');
        settings.setUserSetting('art', 'obj');

        expect(settings.settings.get('music')).toBe('rock');
        expect(settings.settings.get('art')).toBe('obj');
    })
})

