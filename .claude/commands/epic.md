---
name: epic
description: (Genesis Flow) Создает детальный Эпик на основе идеи или существующих документов.
argument-hint: Краткое описание задачи или ID Фазы из Roadmap (например, Phase-1)
tools: []
model: claude-3-5-haiku-latest
---

# Создание Нового Эпика

Получил вашу задачу: "$ARGUMENTS".

Сейчас я вызову `product-manager-agent`, чтобы он проанализировал эту задачу и создал формализованный Эпик.

**Вызов:** `product-manager-agent`
