// Check that userId owns the document
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

