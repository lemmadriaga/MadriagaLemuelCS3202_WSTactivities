const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

textInput.addEventListener("input", function () {
  const words = this.value
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  wordCount.textContent = words.length;

  const sentences = this.value
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0);
  sentenceCount.textContent = sentences.length;
});
