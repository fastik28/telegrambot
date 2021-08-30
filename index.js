const { Telegraf } = require('telegraf')
const config = require('config')
const text = require('./const')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const { markup } = require('telegraf/extra')
const { inlineKeyboard, callbackButton } = require('telegraf/markup')

const bot = new Telegraf(config.get('token'))

bot.command('start', ({ reply }) => {
    return reply('Що тебе цікавить?',  Markup
    .keyboard([
    
        ['Чати груп👥', 'Чати гуртожитків🏢'], // Row1 with 2 buttons
        ['Розклади занять👨🏿‍🏫', 'Розташування Аудиторій🗺'], // Row2 with 2 buttons
        ['FAQ першокурсника', 'Пасхалки🤪']
        
    ])
      .oneTime()
      .resize()
      .extra()
    )
})

/*bot.hears('FAQ першокурсника', ctx => {
    ctx.deleteMessage()
    ctx.replyWithDocument(
        'https://telegra.ph/FAQ-pershokursnika-08-14',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
*/

bot.hears('FAQ першокурсника', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'У розробці......',
    {
        reply_markup: {
            inline_keyboard: 
            [  
                [{text: '🎓 Меню', callback_data: 'GB'}]
            ] 
        }
    })
})

   
bot.hears('Чати груп👥', ctx => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, "ФЕП-12с - https://t.me/joinchat/8j1XD0k6HZhmNDFi \nФЕП-14С https://t.me/joinchat/9rx2BpaFW4ozN2Yy \nФЕІ-14 https://t.me/joinchat/MlXlLJvsumJjNmVi \nФеп-11с https://t.me/joinchat/gK-CQ8n8NlQ4Zjc6 \nФем-12 https://t.me/joinchat/3pW2IC0807IxYWRi \nФес-13 https://t.me/joinchat/B9LntC7EisplZWIy \nФЕМ-11 https://t.me/joinchat/1nTGYigsgp4wMjVi \nФеп-13 https://t.me/joinchat/tz6-kWRmPnE3ZjIy \nФеі-15 https://t.me/joinchat/ocJErTWlcYEyMzAy \nФеІ-14с https://t.me/joinchat/MlXlLJvsumJjNmVi \nФЕЛ-11С https://t.me/joinchat/gxat8D5kGoM4Mzky \nФеі-11 https://t.me/joinchat/hRQQIkrGxvw0YzUy \nФЕІ-13 https://t.me/joinchat/zTNjXWMsIjM5YjE6 \nФес-12  https://t.me/joinchat/019NU0ve654xODIy \nФеп-13 https://t.me/joinchat/tz6-kWRmPnE3ZjIy",
    {
        reply_markup: {
            inline_keyboard: 
            [  
                [{text: '🎓 Меню', callback_data: 'GB'}]
            ] 
        }
    })
})
    
bot.hears('Пасхалки🤪', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'У розробці......',
    {
        reply_markup: {
            inline_keyboard: 
            [  
                [{text: '🎓 Меню', callback_data: 'GB'}]
            ] 
        }
    })
})



bot.hears('Чати гуртожитків🏢', ctx => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Ось силки🤗',
    {
        reply_markup: {
            inline_keyboard: 
            [  
                [{text: 'Гуртожиток №9', url: 'https://t.me/joinchat/f1qIu3E3py1lNDVi'}],
                [{text: 'Гуртожиток №5', url: 'http://t.me/joinchat/FuQq2WH12qnCYJye'}],
                [{text: '🎓 Меню', callback_data: 'GB'}]
            ] 
        }
    })
})

//кнопка MENU
bot.action('GB', ({ reply }) =>{
    return reply('Що тебе цікавить?', Markup
    .keyboard([
        ['Чати груп👥', 'Чати гуртожитків🏢'], 
        ['Розклади занять👨🏿‍🏫', 'Розташування Аудиторій🗺'], 
        ['FAQ першокурсника', 'Пасхалки🤪']
    ])
      .oneTime()
      .resize()
      .extra()
   )
})
//кінець   

bot.hears('Розташування Аудиторій🗺', ctx => {
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/jVYt5X0',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

//Меню
bot.hears('Розклади занять👨🏿‍🏫', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Таксс, почнемо з спеціальності', 
    {
        reply_markup: {
            inline_keyboard: 
            [  
                [{text: '121 дефолт', callback_data: 'DF'}, {text: '121 ВК', callback_data: 'VK'}, {text: '122', callback_data: 'PS'}],
                [{text: '126', callback_data: 'HG'}, {text: '153', callback_data: 'JH'}, {text: '171', callback_data: 'KL'}],
                [{text: '🎓 Меню', callback_data: 'GB'}]
            ] 
        }
    })
})

//Кнопка 122
bot.action('PS', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Угу, яка група?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: '1', callback_data: 'DD'}, {text: '2', callback_data: 'EE'}, {text: '3', callback_data: 'FF'}],
                [{text: '4', callback_data: 'GG'}, {text: '5', callback_data: 'HH'}]
            ]
        }
     })
})
//Початок днів 1
bot.action('DD', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'XC'}, {text: 'Вт', callback_data: 'XV'}, {text: 'СР', callback_data: 'XB'}],
                [{text: 'Чт', callback_data: 'XN'}, {text: 'Пт', callback_data: 'XM'}]
            ]
        }
     })
})
//Розклад
bot.action('XC', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/m0WcRN5',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z8'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('XV', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/6RsSVJ2',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z8'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('XB', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/BgpnZ4x',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z8'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('XN', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/r6B7C1k',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z8'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('XM', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/HhtGgCP',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z8'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи DD
bot.action('Z8', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'XC'}, {text: 'Вт', callback_data: 'XV'}, {text: 'СР', callback_data: 'XB'}],
                [{text: 'Чт', callback_data: 'XN'}, {text: 'Пт', callback_data: 'XM'}]
            ]
        }
     })
})
//Початок днів 2
bot.action('EE', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'TY'}, {text: 'Вт', callback_data: 'TU'}, {text: 'СР', callback_data: 'TI'}],
                [{text: 'Чт', callback_data: 'TO'}, {text: 'Пт', callback_data: 'TP'}]
            ]
        }
     })
})
//Розклад
bot.action('TY', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/4m40Lxn',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z7'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('TU', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/nDHR5dc',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z7'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('TI', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/symmXNZ',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z7'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('TO', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/mXmFLPB',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z7'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('TP', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/Pwr3RDk',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z7'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи EE
bot.action('Z7', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'TY'}, {text: 'Вт', callback_data: 'TU'}, {text: 'СР', callback_data: 'TI'}],
                [{text: 'Чт', callback_data: 'TO'}, {text: 'Пт', callback_data: 'TP'}]
            ]
        }
     })
})
    
//Початок днів 3
bot.action('FF', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'YU'}, {text: 'Вт', callback_data: 'YI'}, {text: 'СР', callback_data: 'YO'}],
                [{text: 'Чт', callback_data: 'YP'}, {text: 'Пт', callback_data: 'YA'}]
            ]
        }
     })
})
//Розклад
bot.action('YU', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/SQRxt1y',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z6'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('YI', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/Xj5vYdK',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z6'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('YO', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/j5tPJ5Z',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z6'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('YP', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/whccwZy',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z6'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('YA', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/Jm5dwtV',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z6'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи FF
bot.action('Z6', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'YU'}, {text: 'Вт', callback_data: 'YI'}, {text: 'СР', callback_data: 'YO'}],
                [{text: 'Чт', callback_data: 'YP'}, {text: 'Пт', callback_data: 'YA'}]
            ]
        }
     })
})
    
//Початок днів 4
bot.action('GG', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'UI'}, {text: 'Вт', callback_data: 'UO'}, {text: 'СР', callback_data: 'UP'}],
                [{text: 'Чт', callback_data: 'UA'}, {text: 'Пт', callback_data: 'US'}]
            ]
        }
     })
})
//Розклад
bot.action('UI', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/0B4Ynbc',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z5'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('UO', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/TLVsHrH',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z5'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('UP', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/Wk6PH7h',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z5'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('UA', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/6Fv1hKN',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z5'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('US', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/fDz2yG1',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z5'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи GG
bot.action('Z5', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'UI'}, {text: 'Вт', callback_data: 'UO'}, {text: 'СР', callback_data: 'UP'}],
                [{text: 'Чт', callback_data: 'UA'}, {text: 'Пт', callback_data: 'US'}]
            ]
        }
     })
})
//Початок днів 5
bot.action('HH', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'IO'}, {text: 'Вт', callback_data: 'IP'}, {text: 'СР', callback_data: 'IA'}],
                [{text: 'Чт', callback_data: 'IS'}, {text: 'Пт', callback_data: 'ID'}]
            ]
        }
     })
})
//Розклад
bot.action('IO', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/bRwPc7n',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z4'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('IP', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/ZGnqnGH',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z4'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('IA', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/jW2FmbK',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z4'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('IS', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/D9GjGkz',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z4'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('ID', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/K0F4ZYK',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z4'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи HH
bot.action('Z4', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'IO'}, {text: 'Вт', callback_data: 'IP'}, {text: 'СР', callback_data: 'IA'}],
                [{text: 'Чт', callback_data: 'IS'}, {text: 'Пт', callback_data: 'ID'}]
            ]
        }
     })
})
//кінець 

//кнопка 121 ВК
//Початок днів
bot.action('VK', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'OP'}, {text: 'Вт', callback_data: 'OA'}, {text: 'СР', callback_data: 'OS'}],
                [{text: 'Чт', callback_data: 'OD'}, {text: 'Пт', callback_data: 'OF'}]
            ]
        }
     })
})
//Розкад
bot.action('OP', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/SQYdRdf',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z3'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('OA', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/GCbrfzV',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z3'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('OS', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/z69F7nn',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z3'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('OD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/DGGhGWz',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z3'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('OF', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/jJG3MV6',
        {
            reply_markup: {
                inline_keyboard: 
                [ 
                    [{text: '⬅️ Назад', callback_data: 'Z3'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи VK
bot.action('Z3', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'OP'}, {text: 'Вт', callback_data: 'OA'}, {text: 'СР', callback_data: 'OS'}],
                [{text: 'Чт', callback_data: 'OD'}, {text: 'Пт', callback_data: 'OF'}]
            ]
        }
     })
})
//кінець 

//кнопка 126
bot.action('HG', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Угу, яка група?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: '1', callback_data: 'II'}, {text: '2', callback_data: 'JJ'}, {text: '3', callback_data: 'KK'}]
            ]
        }
     })
})
//Початок днів
bot.action('II', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'PA'}, {text: 'Вт', callback_data: 'PD'}, {text: 'СР', callback_data: 'PF'}],
                [{text: 'Чт', callback_data: 'PG'}, {text: 'Пт', callback_data: 'PH'}]
            ]
        }
     })
})
//Розклад
bot.action('PA', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/X47TND9',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z2'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('PD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/6JWPTGb',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z2'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('PF', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/cDv2WhS',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z2'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('PG', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/xzqF1Tm',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z2'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('PH', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/BfDhMNg',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z2'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи II
bot.action('Z2', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'PA'}, {text: 'Вт', callback_data: 'PD'}, {text: 'СР', callback_data: 'PF'}],
                [{text: 'Чт', callback_data: 'PG'}, {text: 'Пт', callback_data: 'PH'}]
            ]
        }
     })
})
//Початок днів 2
bot.action('JJ', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'AS'}, {text: 'Вт', callback_data: 'AD'}, {text: 'СР', callback_data: 'AF'}],
                [{text: 'Чт', callback_data: 'AG'}, {text: 'Пт', callback_data: 'AH'}]
            ]
        }
     })
})
//Розклад
bot.action('AS', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/ChMmWBc',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z1'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('AD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/mTPH91t',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z1'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('AF', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/LSRyHDW',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z1'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('AG', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/VCtBmTZ',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z1'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('AH', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/0ZcxWsX',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'Z1'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи JJ
bot.action('Z1', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'AS'}, {text: 'Вт', callback_data: 'AD'}, {text: 'СР', callback_data: 'AF'}],
                [{text: 'Чт', callback_data: 'AG'}, {text: 'Пт', callback_data: 'AH'}]
            ]
        }
     })
})

//Початок днів 3
bot.action('KK', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'SD'}, {text: 'Вт', callback_data: 'SF'}, {text: 'СР', callback_data: 'SG'}],
                [{text: 'Чт', callback_data: 'SJ'}, {text: 'Пт', callback_data: 'SK'}]
            ]
        }
     })
})
//Розклад
bot.action('SD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/B6Jsv4P',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZM'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('SF', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/3CJF0k3',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZM'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('SG', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/cc7KYL0',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZM'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('SJ', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/FKGCDD8',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZM'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('SK', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/Br7JsyB',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZM'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи KK
bot.action('ZM', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'SD'}, {text: 'Вт', callback_data: 'SF'}, {text: 'СР', callback_data: 'SG'}],
                [{text: 'Чт', callback_data: 'SJ'}, {text: 'Пт', callback_data: 'SK'}]
            ]
        }
     })
})
    
//кінець 

//кнопка 171
//Початок днів 1
bot.action('KL', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'DG'}, {text: 'Вт', callback_data: 'DJ'}, {text: 'СР', callback_data: 'DK'}],
                [{text: 'Чт', callback_data: 'DL'}, {text: 'Пт', callback_data: 'DZ'}]
            ]
        }
     })
})
//Розклад
bot.action('DG', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/W6tpw2T',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZN'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('DJ', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/jDf2xCc',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZN'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('DK', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/DRTVp5Q',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZN'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('DL', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/gtPY9hZ',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZN'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('DZ', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/kM2h4j9',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZN'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи DG
bot.action('ZN', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'DG'}, {text: 'Вт', callback_data: 'DJ'}, {text: 'СР', callback_data: 'DK'}],
                [{text: 'Чт', callback_data: 'DL'}, {text: 'Пт', callback_data: 'DZ'}]
            ]
        }
     })
})
    
//кінець 

//кнопка 153
bot.action('JH', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Угу, яка група?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: '1', callback_data: 'LL'}, {text: '2', callback_data: 'MM'}]
            ]
        }
     })
})
//Початок днів 1
bot.action('LL', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'ER'}, {text: 'Вт', callback_data: 'ET'}, {text: 'СР', callback_data: 'EY'}],
                [{text: 'Чт', callback_data: 'EU'}, {text: 'Пт', callback_data: 'EI'}]
            ]
        }
     })
})
//Розкад
bot.action('ER', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/p4mhbS4',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZB'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('ET', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/L6SXhnS',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZB'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('EY', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/k00X9R1',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZB'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('EU', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/RQj1TFd',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZB'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('EI', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/2kNwnjb',
        {
            reply_markup: {
                inline_keyboard: 
                [ 
                    [{text: '⬅️ Назад', callback_data: 'ZB'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи LL
bot.action('ZB', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'ER'}, {text: 'Вт', callback_data: 'ET'}, {text: 'Ср', callback_data: 'EY'}],
                [{text: 'Чт', callback_data: 'EU'}, {text: 'Пт', callback_data: 'EI'}]
            ]
        }
     })
})
//Початок днів 2
bot.action('MM', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'RT'}, {text: 'Вт', callback_data: 'RY'}, {text: 'Ср', callback_data: 'RU'}],
                [{text: 'Чт', callback_data: 'RI'}, {text: 'Пт', callback_data: 'RO'}]
            ]
        }
     })
})
//Розклад
bot.action('RT', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/2qTYrVs',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZV'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('RY', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/vXhM8s6',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZV'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('RU', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/mHWTMnY',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZV'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('RI', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/HP742DM',
        {
            reply_markup: {
                inline_keyboard: 
                [ 
                    [{text: '⬅️ Назад', callback_data: 'ZV'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('RO', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/SKrJywn',
        {
            reply_markup: {
                inline_keyboard: 
                [
                    [{text: '⬅️ Назад', callback_data: 'ZV'}],   
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи MM
bot.action('ZV', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'RT'}, {text: 'Вт', callback_data: 'RY'}, {text: 'СР', callback_data: 'RU'}],
                [{text: 'Чт', callback_data: 'RI'}, {text: 'Пт', callback_data: 'RO'}]
            ]
        }
     })
})
    
//кінець 

//кнопка 121 дефолт
bot.action('DF', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Угу, яка група?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: '1', callback_data: 'AA'}, {text: '2', callback_data: 'BB'}, {text: '3', callback_data: 'CC'}]
            ]
        }
     })
})
//Початок днів
bot.action('AA', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'MN'}, {text: 'Вт', callback_data: 'TD'}, {text: 'Ср', callback_data: 'WD'}],
                [{text: 'Чт', callback_data: 'RD'}, {text: 'Пт', callback_data: 'TF'}]
            ]
        }
     })
})
//Розклад
bot.action('MN', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/CBZSMjp',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'GH'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('TD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/sjJs3qs',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'GH'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
    
bot.action('WD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/5nh4hmM',
        {
            reply_markup: {
                inline_keyboard: 
                [ 
                    [{text: '⬅️ Назад', callback_data: 'GH'}],  
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('RD', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/dtsNmBk',
        {
            reply_markup: {
                inline_keyboard: 
                [ 
                    [{text: '⬅️ Назад', callback_data: 'GH'}],  
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('TF', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/Nxq50LP',
        {
            reply_markup: {
                inline_keyboard: 
                [ 
                    [{text: '⬅️ Назад', callback_data: 'GH'}], 
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//кінець
//Кнопка назад для групи AA
bot.action('GH', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'MN'}, {text: 'Вт', callback_data: 'TD'}, {text: 'Ср', callback_data: 'WD'}],
                [{text: 'Чт', callback_data: 'RD'}, {text: 'Пт', callback_data: 'TF'}]
            ]
        }
     })
})

//Початок днів 2
bot.action('BB', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'QW'}, {text: 'Вт', callback_data: 'QE'}, {text: 'СР', callback_data: 'QT'}],
                [{text: 'Чт', callback_data: 'QY'}, {text: 'Пт', callback_data: 'QU'}]
            ]
        }
     })
})
//Розклад
bot.action('QW', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/H4WHmzt',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZX'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('QE', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/ysJX2YL',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZX'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('QT', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/CwVtwzs',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZX'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('QY', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/D481hP7',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZX'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('QU', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/grrnzBK',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZX'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка назад для групи BB
bot.action('ZX', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'QW'}, {text: 'Вт', callback_data: 'QE'}, {text: 'СР', callback_data: 'QT'}],
                [{text: 'Чт', callback_data: 'QY'}, {text: 'Пт', callback_data: 'QU'}]
            ]
        }
     })
})
    
//Початок днів 3
bot.action('CC', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'WE'}, {text: 'Вт', callback_data: 'WR'}, {text: 'СР', callback_data: 'WT'}],
                [{text: 'Чт', callback_data: 'WY'}, {text: 'Пт', callback_data: 'WU'}]
            ]
        }
     })
})
//Розкад
bot.action('WE', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/RjzNHvt',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZC'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('WR', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/rf6QXt7',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZC'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('WT', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/jDKzqdK',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZC'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('WY', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/LrNYRdm',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZC'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})

bot.action('WU', (ctx) =>{
    ctx.deleteMessage()
    ctx.replyWithPhoto(
        'https://ibb.co/tpjpnVn',
        {
            reply_markup: {
                inline_keyboard: 
                [  
                    [{text: '⬅️ Назад', callback_data: 'ZC'}],
                    [{text: '🎓 Меню', callback_data: 'GB'}]
                ] 
            }
        })
})
//Кнопка групи CC
bot.action('ZC', (ctx) =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Який день?',
    {
        reply_markup: {
            inline_keyboard: 
            [
                [{text: 'Пн', callback_data: 'WE'}, {text: 'Вт', callback_data: 'WR'}, {text: 'СР', callback_data: 'WT'}],
                [{text: 'Чт', callback_data: 'WY'}, {text: 'Пт', callback_data: 'WU'}]
            ]
        }
     })
})


bot.on('message', (ctx) => ctx.reply('Це не те що мені потрібно!🥺 \n\n/start   👈  ось команда🧢'))
bot.help((ctx) => ctx.reply(text.commands))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch() 

