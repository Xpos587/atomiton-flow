---
name: apply-changes
description: (Atomiton Flow) Сравнивает .specs в текущей ветке с 'main' и запускает миграцию.
argument-hint: (опционально) Имя основной ветки, если не 'main'
tools: Bash, Read
model: claude-sonnet-4-0
---

# Atomiton Flow: Инициализация Миграции

## Роль: Главный Оркестратор

**Предусловие:** Эта команда должна запускаться из feature-ветки, в которой вы уже сделали коммит с изменениями в `.specs/`.

1.  **Определи Базу для Сравнения:**

    - Если передан аргумент (`$ARGUMENTS`), используй его как базовую ветку.
    - Иначе, используй `main`.

2.  **Создай Песочницу:** Создай уникальную директорию `.tasks/migration-[timestamp]`. Это `<TaskFolder>`.

3.  **Проанализируй Изменения:**

    - **Выполни:** `git diff [базовая_ветка]...HEAD -- .specs/`
    - **Передай результат** `diff-analyzer-agent`.

4.  **Спланируй Миграцию:** Передай JSON-отчет анализатора `migration-planner-agent`. Он должен создать `Migration-Plan.md` в `<TaskFolder>`.

5.  **Делегируй Исполнение:** Передай управление воркфлоу `@.specs/workflows/wf-atomiton-main.md`, передав ему `Migration-Plan.md` и `<TaskFolder>`.
