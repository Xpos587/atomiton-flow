---
name: implement
description: Запускает воркфлоу для реализации фичи по ID Эпика из папки .memory/epics/
argument-hint: ID Эпика (например, EP-001)
tools: Bash, mcp__memory-bank__memory_bank_read
model: claude-sonnet-4-0
---

# Agentic Workflow: Epic Implementation Initialization

## Роль: Агент-Оркестратор Инициализации

<UserRequest>
$ARGUMENTS
</UserRequest>

### ::ANCHOR-INIT-PLAN-01:: План Инициализации

````mermaid
graph TD
    A(Start) --> B(1. Извлечь ID Эпика из UserRequest);
    B --> C(2. Найти файл Эпика в .memory/epics/);
    C --> D{3. Эпик найден?};
    D -- Да --> E(4. Создать Папку Задачи .tasks/EP-XXX/);
    D -- Нет --> H(Сообщить пользователю об ошибке и остановить работу);
    E --> F(5. Прочитать главный воркфлоу .memory/workflows/wf-feature-development.md);
    F --> G(6. Делегировать выполнение воркфлоу);
    G --> I(End);
    H --> I;```

### Твои Действия

1.  **Извлечение ID ::ANCHOR-EXTRACT-ID-01::**: Из `<UserRequest>` извлеки ID Эпика, например, `EP-001`.
2.  **Поиск Эпика ::ANCHOR-FIND-EPIC-02::**: Сформируй путь к файлу, используя стандарт: `.memory/epics/ID-*.md`. Найди его.
3.  **Создание Папки Задачи ::ANCHOR-CREATE-TASKDIR-03::**: Создай директорию по стандарту: `.tasks/ID/` (например, `.tasks/EP-001/`). Это будет `<TaskFolder>`.
4.  **Делегирование ::ANCHOR-DELEGATE-WORKFLOW-04::**: Передай управление воркфлоу `wf-feature-development.md`, передав ему два параметра:
    - `<SourceEpic>`: Путь к найденному файлу Эпика.
    - `<TaskFolder>`: Путь к созданной Папке Задачи.
````
