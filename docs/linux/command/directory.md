---
nav:
  title: Linux
  order: 1
group:
  title: 命令分类
  order: 1
title: 目录管理
order: 4
---

# 目录管理

- 目录管理
  - `install` 安装或升级软件或备份数据
  - `tree` 树状图列出目录的内容
  - `popd` 用于删除目录栈中的记录
  - `dirs` 显示目录记录
  - `rmdir` 删除空目录
  - `mkdir` 创建目录
  - `rm` 删除给定的文件或目录
  - `pwd` 绝对路径方式显示用户当前工作目录
  - `ls` 显示目录内容列表
  - `mv` 用来对文件或目录重新命名
  - `cp` 将源文件或目录拷贝到目标文件或目录中
  - `cd` 切换用户当前工作目录

## install

安装或升级软件或备份数据，它的使用权限是所有用户。

install 通常用于程序的 makefile，使用它来将程序拷贝到目标（安装）目录。

## tree

以树状图列出目录的内容。

执行 tree 指令，它会列出指定目录下的所有文件，包括子目录里的文件。

```bash
# 查看某个目录的文件结构
tree /foo

# 加上彩色，便于辨认
tree -C

# 列出文件或目录的最后修改时间
tree -D

# 只显示文件夹
tree -d

# 显示 n 层目录内容
tree -L n

# 导出生成的文件目录
tree /foo > README.md

# 过滤文件或文件夹
tree -I "node_modules"
```

## popd

删除目录栈中的记录；如果 popd 命令不加任何参数，则会先删除目录栈最上面的记录，然后切换到删除过后的目录栈中的最上面的目录。

```bash
# 将第 N 个目录删除（左边数起）
popd +N

# 将第 N 个目录删除（右边数起）
popd -N
```

## pushd

将目录加入命令堆叠中。如果指令没有指定目录名称，则会将当前的工作目录置入目录堆叠的最顶端。置入目录如果没有指定堆叠的位置，也会置入目录堆叠的最顶端，同时工作目录会自动切换到目录堆叠最顶端的目录去。

```bash
# 只加入目录到堆叠中，不进行cd操作
pushd /tmp/dir3

# 将第 N 个目录删除（右边数起）
pushd /tmp/dir2
```

注意：最左边表示栈顶，最右边表示栈底。

## dirs

```bash
# 删除目录栈中的所有记录
dirs -c

# 以完整格式显示
dirs -l

# 一个目录一行的方式显示
dirs -p

# 每行一个目录来显示目录栈的内容，每个目录前加上的编号
dirs -v
```

## rmdir

删除空目录（目录下有其他文件无法删除）

```bash
rmdir /usr/foo
```

## mkdir

创建目录

```bash
# 根目录下创建 a
mkdir /a

# 当前目录下创建 a
mkdir a

# 同时创建多个目录 a、b、c、d
mkdir a b c d

# 创建目录和父目录 a/b/c/d（创建多级目录）
mkdir -p a/b/c/d
```

## rm

```bash
# 强制删除文件或目录
rm -f

# 递归删除
rm -r

# 删除机器上的所有文件
rm -rvf /
```

## pwd

pwd 命令能够看到当前终端所在的工作目录（从根目录开始的全路径名称）。告诉你你在哪里。

```bash
# 查看当前全路径目录
pwd
```

## ls

查看当前目录下的文件

常用命令

```bash
# 显示非隐藏文件目录
ls

# 显示所有文件目录（包括隐藏文件目录）
ls -a

# 列出文件和文件夹的详细信息
ls -l

# 以最近修改的文件显示文件目录
ls -t

# 逆序显示
ls -r

# 显示递归文件
ls -R
```

## mv

对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。

在 Linux 的地层中，文件的改名实质就是文件的移动。

```bash
# 将文件 foo 名称改为 bar
mv foo bar

# 将目录 /usr/men 中所有文件移到当前目录
mv /usr/men/* .
```

## cp

将一个或多个源文件或者目录复制到指定的目的文件或目录。

```bash
# 将指定文件拷贝至当前目录
cp /etc/foo/foo.conf .

# 将文件拷贝至指定目录并重命名
cp foo /etc/bar

# 将指定目录下所有文件拷贝至目标目录
cp -r /usr/foo /usr/bar
```

## cd

`cd` 命令用于更改当前的操作目录。

```bash
# 绝对路径
cd /path/to/...

# 相对路径
cd ./path/to/...

# 相对路径
cd ../path/to/...
```

若目录名省略，则变换至使用者的 home directory。

```bash
# 进入用户主目录
cd

# 进入用户主目录
cd ~

# 返回进入此目录前的目录
cd -

# 返回上一层目录
cd ..

# 返回上两层目录
cd ../..
```

## 通配符

```bash
# 拷贝当前目录以 file 开头的文件到根目录
cp file* /
```