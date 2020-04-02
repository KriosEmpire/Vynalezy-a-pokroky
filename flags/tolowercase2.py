#!/bin/python

import sys, os, string

print
print "------------------------------------------------------------------------------"
print "Renaming files to lowercase ..."
print "------------------------------------------------------------------------------"
print


def getFileList():
	if len(sys.argv) == 1:
		names = os.listdir(os.curdir)
	else:
		names = sys.argv[1:]
	return names


def renameFile(name, names):
	newName = string.lower(name)
	print "Renaming '" + name + "' to '" + newName + "'"
	os.rename(name, newName)
	
#	try:
#		names = os.listdir(newName)
#		os.system('
#	except:
#		print "It is file ..."
	return


names = getFileList()
for name in names:
	renameFile(name, names)

print
print "------------------------------------------------------------------------------"
print
print "Ready ..."
print
print 
