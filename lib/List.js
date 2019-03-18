function List () {
  this.dataSource = []
  this.pos = 0
  this.front = function () {
    this.pos = 0
  }

  this.end = function () {
    this.pos = this.length - 1
  }

  this.prev = function prev () {
    --this.pos
    if (this.pos < 0) this.pos = 0
  }

  this.next = function next () {
    if (this.pos < this.length) {
      --this.pos
    }
  }

  this.currpos = function () {
    return this.pos
  }

  this.moveTo = function (pos) {
    this.pos = pos
  }

  this.getElement = function () {
    return this.dataSource[this.pos]
  }

  this.hasNext = function () {
    return this.pos < this.length
  }

  this.hasPrev = function () {
    return this.pos > 0
  }
}

List.prototype.find = function (item) {
  for (var i = 0; i <= this.dataSource.length; i++) {
    if (item === this.dataSource[i]) {
      return i
    }
  }
  return -1
}

List.prototype.append = function (item) {
  this.dataSource.push(item)
}

List.prototype.remove = function (item) {
  var index = this.find(item)
  if (index === -1) return false
  this.dataSource.splice(index, 1)
  return true
}

List.prototype.clear = function () {
  delete this.dataSource
  this.dataSource.length = 0
  this.pos = 0
}

List.prototype.length = function () {
  return this.dataSource.length
}

List.prototype.toString = function () {
  return this.dataSource
}

List.prototype.insert = function (item, after) {
  var index = this.find(item)
  if (index === -1) return false
  this.dataSource.splice(index + 1, 0, item)
  return true
}

List.prototype.contains = function (item) {
  return this.find(item) !== -1
}
