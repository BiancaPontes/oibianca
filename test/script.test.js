/**
 * @jest-environment jsdom
 */

const init = require('./script')

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

  test('1. Clique no menu adiciona classe "ativo"', () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu-list')

    btn.click()

    expect(menu.classList.contains('ativo')).toBe(true)
  })

  test('2. Clique no menu "x" remove classe "ativo" (toggle)', () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu-list')

    btn.click()
    btn.click()

    expect(menu.classList.contains('ativo')).toBe(false)
  })

  test('3. Clique no botão "ver mais" abre o modal', () => {
    const openBtn = document.getElementById('open-modal')
    const modal = document.getElementById('modal')

    openBtn.click()

    expect(modal.classList.contains('ativo')).toBe(true)
  })

  test('4. Clique no botão "x" fecha o modal', () => {
    const modal = document.getElementById('modal')
    const closeBtn = document.getElementById('close-modal')

    modal.classList.add('ativo')
    closeBtn.click()

    expect(modal.classList.contains('ativo')).toBe(false)
  })

  test('5. Clique fora do conteúdo fecha o modal', () => {
    const modal = document.getElementById('modal')

    modal.classList.add('ativo')

    modal.click() 

    expect(modal.classList.contains('ativo')).toBe(false)
  })
})