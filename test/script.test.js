/* global describe, test, expect, beforeEach */

const init = require('../script')

describe('Menu e Modal', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="menu-btn">☰</button>
      <ul id="menu-list"></ul>
      <div class="menu-mobile"></div>

      <button id="open-modal"></button>
      <div id="modal"></div>
      <button id="close-modal"></button>
    `

    init()
  })

  test('menu abre ao clicar', () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu-list')

    btn.click()

    expect(menu.classList.contains('ativo')).toBe(true)
  })

  test('menu fecha ao clicar novamente', () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu-list')

    btn.click()
    btn.click()

    expect(menu.classList.contains('ativo')).toBe(false)
  })

  test('ícone do botão muda ao clicar', () => {
    const btn = document.getElementById('menu-btn')

    btn.click()

    expect(btn.textContent).toBe('✕')
  })

  test('modal abre ao clicar no botão', () => {
    const openBtn = document.getElementById('open-modal')
    const modal = document.getElementById('modal')

    openBtn.click()

    expect(modal.classList.contains('ativo')).toBe(true)
  })

  test('modal fecha ao clicar fora', () => {
    const openBtn = document.getElementById('open-modal')
    const modal = document.getElementById('modal')

    openBtn.click()
    modal.click()

    expect(modal.classList.contains('ativo')).toBe(false)
  })
})
